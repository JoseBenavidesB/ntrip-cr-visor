alert("Estas siendo redirigido al nuevo visor")
window.location.href = "https://visorntrip.com/"

// const map = L.map("map", {
//     ccrs: L.CRS.EPSG4326,
//     center: [9.82, -84],
//     zoom: 8
// });

// //ntrip cr marks
// const crGroup = [];

// //IGN marks
// const ignGroup = [];

// //IGN circles
// const ignCircles = {};

// //CR circle
// const crCircles = {};

// //draw some points
// const getData = async (radius = 30000) => {
//     const urlCr = 'points.json';
//     const urlIgn = 'ignStations.json';

//     const resultCr = await fetch(urlCr);
//     const dataCr = await resultCr.json();

//     const resultIgn = await fetch(urlIgn);
//     const dataIgn = await resultIgn.json();

//     const ignIcon = L.divIcon({
//         html: `<svg height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#1a47ff">

//         <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
//         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
//         <g id="SVGRepo_iconCarrier"> <path style="fill:#1a47ff;" d="M255.999,0C114.841,0,0,114.841,0,255.999s114.841,255.999,255.999,255.999 s255.999-114.84,255.999-255.999S397.158,0,255.999,0z M483.755,242.095h-47.88c-7.679,0-13.904,6.225-13.904,13.904 c0,6.767,4.836,12.399,11.239,13.643c-6.646,87.147-76.42,156.921-163.567,163.567c-1.244-6.403-6.876-11.239-13.643-11.239 s-12.399,4.836-13.643,11.239c-87.147-6.646-156.921-76.42-163.567-163.567c6.403-1.244,11.239-6.876,11.239-13.643 c0-6.767-4.836-12.399-11.239-13.643c6.646-87.147,76.42-156.921,163.567-163.567c1.244,6.403,6.876,11.239,13.643,11.239 c7.679,0,13.904-6.225,13.904-13.904v-47.88C384.676,35.178,476.82,127.323,483.755,242.095z M242.095,28.244v22.699 C139.82,57.809,57.81,139.818,50.943,242.095H28.245C35.178,127.323,127.323,35.178,242.095,28.244z M28.245,269.904h22.699 c6.866,102.275,88.875,184.285,191.152,191.152v22.699C127.323,476.82,35.178,384.676,28.245,269.904z M269.904,483.755v-22.699 c102.275-6.866,184.285-88.875,191.152-191.152h22.699C476.82,384.676,384.676,476.82,269.904,483.755z"/> <circle style="fill:#FEE187;" cx="255.994" cy="223.305" r="37.556"/> <g> <path style="fill:#ff0000;" d="M255.999,274.769c-28.377,0-51.466-23.087-51.466-51.466s23.087-51.466,51.466-51.466 s51.466,23.087,51.466,51.466S284.377,274.769,255.999,274.769z M255.999,199.646c-13.044,0-23.657,10.612-23.657,23.657 c0,13.045,10.612,23.657,23.657,23.657c13.045,0,23.657-10.612,23.657-23.657S269.044,199.646,255.999,199.646z"/> <path style="fill:#ff0000;" d="M255.999,393.339c-3.375,0-6.749-1.222-9.409-3.668c-3.875-3.562-94.906-88.134-94.906-166.696 c0-11.073,1.73-21.981,5.14-32.422c2.385-7.3,10.238-11.283,17.535-8.897c7.3,2.385,11.283,10.235,8.897,17.535 c-2.499,7.647-3.765,15.649-3.765,23.785c0,52.979,54.247,114.09,76.535,136.961c3.351-3.42,7.418-7.7,11.898-12.671 c5.138-5.706,13.929-6.167,19.637-1.025c5.706,5.139,6.165,13.932,1.025,19.637c-13.097,14.54-22.796,23.443-23.202,23.814 C262.729,392.123,259.364,393.339,255.999,393.339z"/> <path style="fill:#ff0000;" d="M312.284,327.25c-2.672,0-5.374-0.769-7.757-2.375c-6.368-4.291-8.053-12.932-3.761-19.301 c21.061-31.256,31.74-59.046,31.74-82.599c0-42.186-34.32-76.506-76.506-76.506c-16.413,0-32.055,5.117-45.234,14.797 c-6.189,4.545-14.89,3.215-19.437-2.976c-4.547-6.189-3.215-14.892,2.976-19.437c17.987-13.211,39.32-20.193,61.697-20.193 c57.52,0,104.315,46.795,104.315,104.315c0,29.189-12.276,62.208-36.487,98.139C321.143,325.099,316.753,327.25,312.284,327.25z"/> </g> </g>
        
//         </svg>`,
//         className: "",
//         iconSize: [0, 0],
//         iconAnchor: [10, 9],
//     });

//     const crIcon = L.divIcon({
//         html: `<svg height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">

//         <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
//         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
//         <g id="SVGRepo_iconCarrier"> <circle style="fill:#86f0fe;" cx="255.996" cy="193.345" r="96.759"/> <g> <path style="fill:#1a47ff;" d="M256,304.456c-61.264,0-111.107-49.842-111.107-111.105S194.735,82.244,256,82.244 s111.107,49.842,111.107,111.107C367.107,254.615,317.265,304.456,256,304.456z M256,110.943 c-45.439,0-82.408,36.967-82.408,82.408c0,45.439,36.969,82.406,82.408,82.406s82.408-36.967,82.408-82.406 C338.408,147.91,301.439,110.943,256,110.943z"/> <path style="fill:#1a47ff;" d="M256,0C149.386,0,62.649,86.737,62.649,193.351c0,72.07,39.642,135.049,98.262,168.299 l82.662,143.175c2.563,4.44,7.301,7.175,12.427,7.175c5.126,0,9.864-2.735,12.427-7.175l84.026-145.537 c3.963-6.863,1.611-15.639-5.252-19.601c-6.866-3.963-15.639-1.611-19.601,5.252l-71.598,124.013l-51.518-89.231 c16.409,4.542,33.683,6.98,51.518,6.98c7.924,0,14.349-6.424,14.349-14.349c0-7.925-6.426-14.35-14.349-14.35 c-90.791,0-164.652-73.863-164.652-164.652S165.211,28.699,256,28.699s164.652,73.863,164.652,164.652 c0,40.902-15.099,80.118-42.515,110.421c-5.316,5.878-4.863,14.951,1.014,20.269c5.876,5.316,14.951,4.862,20.269-1.014 c32.197-35.591,49.93-81.644,49.93-129.675C449.351,86.737,362.614,0,256,0z"/> </g> </g>
        
//         </svg>`,
//         className: "",
//         iconSize: [0, 0],
//         iconAnchor: [10, 9],
//     });
    
//     dataCr.forEach(element => {
//         const latlong = element.geometry.coordinates;
//         const { name, north, east, heigh, file } = element.data;

//         let texto = '';

//         if (file.length > 0) {
//             texto = `<b>${name}</b> <br> <hr> 
//                     Norte: ${north}m <br>
//                     Este: ${east}m <br>
//                     h: ${heigh}m <br>
//                     <a href=${file} target="_blank">Reporte Postproceso</a> <br>`
//         } else {
//             texto = `<b>${name}</b> <br> <hr> 
//                     Norte: ${north}m <br>
//                     Este: ${east}m <br>
//                     h: ${heigh}m <br>`
//         };
        
//         texto = element.data.password ? texto.concat(`NTRIP Password: ${element.data.password} <br>`) : texto;
//         texto = element.data.user ? texto.concat(`NTRIP User: ${element.data.user} <br>`) : texto;
//         texto = element.data.cr05 ? texto.concat(`<strong>CR05</strong><br>`) : texto;

//         crCircles[`${latlong}`] = L.circle(latlong, {
//                 color: '#fca211',
//                 fillColor: '#fca211',
//                 fillOpacity: 0.2,
//                 radius: radius
//             });
        
//         let mark = L.marker(latlong, {icon: crIcon}).on('click', drawCrCircles).bindPopup(texto)
//         mark.bindTooltip(name, {permanent: true, direction: 'top', className: 'my-tooltip'}).openTooltip();
//         crGroup.push(mark);
//     });

//     dataIgn.forEach(element => {
        
//         const latlong = element.geometry.coordinates;

//         const { name,heigh, radio } = element.data;

//         ignCircles[`${latlong}`] = L.circle(latlong, {
//             color: '#6200ff',
//             fillColor: '#6200ff',
//             fillOpacity: 0.2,
//             radius: 60000
//         });

//         let texto = `<b>${name}</b> <br> <hr>
//         radio: ${radio} <br> 
//         h: ${heigh}m <br>`;


//         let mark = L.marker(latlong, {icon: ignIcon}).on('click', drawIgnCircles).bindPopup(texto);
//         mark.bindTooltip(name, {permanent: true, direction: 'top', className: 'my-tooltip-ign'}).openTooltip();
//         ignGroup.push(mark)
        
//     });
// };

// getData();

// setTimeout(() => {
//     const baseLayers = {
//         OSM: L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
//             maxZoom: 19
//         }),

//         ortofoto5000: L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto2017/wms?VERSION=1.1.1', {
//             layers: 'ortofoto2017_5000_altaresolucion'
//         }),

//         ortofoto1000: L.tileLayer.wms('https://geos1.snitcr.go.cr/Ortofoto1k/wms?VERSION=1.1.1', {
//             layers: 'ortofoto2017_1000'
//         }),
//     }

//     //use OSM layer as base
//     baseLayers.OSM.addTo(map);

//     //add location button
//     L.control.locate().addTo(map);

//     //const test = L.layerGroup([littleton, denver, aurora, golden])


//     const ntripCr = L.layerGroup(crGroup);

//     const ntripIgn = L.layerGroup(ignGroup);

//     const overlayers = {
//         zona1: L.tileLayer.wms('https://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities', {
//             layers: 'catastro',
//             opacity: 0.3,
//             maxZoom: 19
//         }),

//         zona2: L.tileLayer.wms('https://siri.snitcr.go.cr/Geoservicios/wms?request=GetCapabilities', {
//             layers: 'catastro_aldia',
//             opacity: 0.3,
//             maxZoom: 19
//         }),
//         NTRIP_CR: ntripCr,
//         NTRIP_IGN: ntripIgn
//     };

//     L.control.layers(baseLayers, overlayers).addTo(map);
// }, 500)

// function drawIgnCircles(e){
//     const latLng = `${e.latlng.lat},${e.latlng.lng}`
//     if(map.hasLayer(ignCircles[latLng])){
//         map.removeLayer(ignCircles[latLng]);
//     }else{
//         map.addLayer(ignCircles[latLng]);
//     }
// };

// function drawCrCircles(e){
//     const latLng = `${e.latlng.lat},${e.latlng.lng}`
//     if(map.hasLayer(crCircles[latLng])){
//         map.removeLayer(crCircles[latLng]);
//     }else{
//         map.addLayer(crCircles[latLng]);
//     }
// };

// map.on('overlayremove', (event) =>{
//     switch (event.name){
//     case 'NTRIP_IGN':   
//         Object.keys(ignCircles).forEach( key => {
//             if(map.hasLayer(ignCircles[key])){
//                 map.removeLayer(ignCircles[key]);
//             }
//         })
//     break;
//     case 'NTRIP_CR':
//         Object.keys(crCircles).forEach( key => {
//             if(map.hasLayer(crCircles[key])){
//                 map.removeLayer(crCircles[key]);
//             }
//         })
//     }
// });

