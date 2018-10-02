
const $geolocateButton = document.getElementById('submit');
$geolocateButton.addEventListener('click', geolocate);

function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }

}
function onGeolocateSuccess(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    console.log('Found coordinates: ', latitude, longitude);
    initMap(latitude, longitude);

}

function initMap(lat, lng) {
   
    const $map = document.getElementById('map');
    const position = { lat:parseFloat(lat), lng:parseFloat(lng) };
    const map = new google.maps.Map($map, {
      center: position,
      zoom: 12,
    });
    const marker = new google.maps.Marker({position:position, map: map})
}

function onGeolocateError(error) {
    console.warn(error.code, error.message);

    if (error.code === 1) {
        // they said no
    } else if (error.code === 2) {
        // position unavailable
    } else if (error.code === 3) {
        // timeout
    }
}
geolocate()

