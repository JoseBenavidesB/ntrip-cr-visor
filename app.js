//ntrip cr marks
const crGroup = [];

//IGN marks
const ignGroup = [];

//draw some points
const getData = async (radius = 30000) => {
    const urlCr = 'points.json'
    const urlIgn = 'ignStations.json'

    const resultCr = await fetch(urlCr);
    const dataCr = await resultCr.json();

    const resultIgn = await fetch(urlIgn);
    const dataIgn = await resultIgn.json();

    dataCr.forEach(element => {
        const latlong = element.geometry.coordinates
        const { name, north, east, heigh, file } = element.data

        let texto = ''

        if (file.length > 0) {
            texto = `<b>${name}</b> <br> <hr> 
                    Norte: ${north}m <br>
                    Este: ${east}m <br>
                    h: ${heigh}m <br>
                    <a href=${file} target="_blank">Reporte Postproceso</a> <br>`
        } else {
            texto = `<b>${name}</b> <br> <hr> 
                    Norte: ${north}m <br>
                    Este: ${east}m <br>
                    h: ${heigh}m <br>`
        }

        crGroup.push(L.marker(latlong).bindPopup(texto));

        const circle =
            L.circle(latlong, {
                color: '#2b9cb5',
                fillColor: '#2b9cb5',
                fillOpacity: 0.2,
                radius: radius
            })

        crGroup.push(circle);

    });

    dataIgn.forEach(element => {
        const latlong = element.geometry.coordinates
        const { name,heigh } = element.data

        let texto = `<b>${name}</b> <br> <hr> 
        h: ${heigh}m <br>`


        ignGroup.push(L.marker(latlong).bindPopup(texto));

        const circle =
            L.circle(latlong, {
                color: '#652bb5',
                fillColor: '#652bb5',
                fillOpacity: 0.2,
                radius: 60000
            })

        ignGroup.push(circle);

    });
};

getData();

setTimeout(() => {
    let valor = true;

    const map = L.map("map", {
        ccrs: L.CRS.EPSG4326,
        center: [9.82, -84],
        zoom: 8
    });

    const baseLayers = {
        OSM: L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
            maxZoom: 19
        }),

        ortofoto5000: L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto2017/wms?VERSION=1.1.1', {
            layers: 'ortofoto2017_5000_altaresolucion'
        }),

        ortofoto1000: L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto1k/wms?VERSION=1.1.1', {
            layers: 'ortofoto2017_1000'
        }),
    }


    //use OSM layer as base
    baseLayers.OSM.addTo(map);

    //add location button
    L.control.locate().addTo(map)

    //const test = L.layerGroup([littleton, denver, aurora, golden])

    const ntripCr = L.layerGroup(crGroup);

    const ntripIgn = L.layerGroup(ignGroup);

    const overlayers = {
        zona1: L.tileLayer.wms('http://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities', {
            layers: 'catastro',
            opacity: 0.3,
            maxZoom: 19
        }),

        zona2: L.tileLayer.wms('http://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities', {
            layers: 'catastro_aldia',
            opacity: 0.3,
            maxZoom: 19
        }),
        NTRIP_CR_30km: ntripCr,
        NTRIP_IGN_60km: ntripIgn
    };

    L.control.layers(baseLayers, overlayers).addTo(map);
}, 500)
