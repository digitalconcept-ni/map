

// Prueba de agregar un marcador al mapa
const randomPoint = L.marker([12.137594, -86.286632]).addTo(map);
const randomPoint2 = L.marker([12.137445, -86.293532]).addTo(map);

map.fitBounds([
    [randomPoint.getLatLng().lat, randomPoint.getLatLng().lng],
    [randomPoint2.getLatLng().lat, randomPoint2.getLatLng().lng]
])