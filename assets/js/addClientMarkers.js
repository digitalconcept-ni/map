

// Prueba de agregar un marcador al mapa
// const randomPoint = L.marker([12.137594, -86.286632]).addTo(map);
// const randomPoint2 = L.marker([12.137445, -86.293532]).addTo(map);

// map.fitBounds([
//     [randomPoint.getLatLng().lat, randomPoint.getLatLng().lng],
//     [randomPoint2.getLatLng().lat, randomPoint2.getLatLng().lng]
// ])

// carga finamica de markers

// map.fitBounds([
//     clients.map(point => [point.lat, point.lng])
// ])

// clients.map((point) =>{
//      L.marker([point.lat, point.lng]).addTo(map)
// })


// evento de localizacion
map.on('locationfound', (e) => {
    // console.log(e)
    const miUbicacion = L.marker(e.latlng).addTo(map).bindPopup('Mi Ubicacion');
    map.fitBounds([
        [miUbicacion.getLatLng().lat, miUbicacion.getLatLng().lng]
    ])
});

// Solicitar la ubicación del usuario 
map.locate({
    watch: true
});
// map.locate();
