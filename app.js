const map = L.map("map", {
    ccrs: L.CRS.EPSG4326,
    center: [10,-84],
    zoom: 8
});

const baseLayers = {
    OSM : L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:19
    }),

    ortofoto5000 : L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto2017/wms?VERSION=1.1.1', {
    layers: 'ortofoto2017_5000_altaresolucion'
    }),
    
    ortofoto1000 : L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto1k/wms?VERSION=1.1.1', {
        layers: 'ortofoto2017_1000'
        }), 
}

const overlayers = {
    zona1 : L.tileLayer.wms('https://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities',{
        layers:'catastro',
        opacity: 0.3,
        maxZoom: 19
    }),

    zona2 : L.tileLayer.wms('https://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities',{
        layers:'catastro_aldia',
        opacity: 0.3,
        maxZoom: 19
    }),
};

L.control.layers(baseLayers, overlayers).addTo(map);

//use OSM layer as base
baseLayers.OSM.addTo(map);

//add location button
L.control.locate().addTo(map)


//draw a some points
const getData = async ()=> {
    const url = 'points.json'

    const result = await fetch(url);
    const data = await result.json();
    
    data.forEach(element => {
        const latlong = element.geometry.coordinates
        const { name, north, east, heigh } = element.data

        const texto = `<b>${name}</b> <br> <hr> 
                    Norte: ${north}m <br>
                    Este: ${east}m <br>
                    h: ${heigh}m <br>`
        
        L.marker(latlong).addTo(map).bindPopup(texto)

        L.circle(latlong, {
            color: '#2b9cb5',
            fillColor: '#2b9cb5',
            fillOpacity: 0.2,
            radius: 40000
        }).addTo(map);
    });
};


//draw a circle with popup about user location
function onLocationFound(e) {
    const radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Usted se encuentra aquí <br>  con una presición de: <br>" + radius + " metros").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
getData();




