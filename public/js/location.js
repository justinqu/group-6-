window.onload=function(){


const $geolocateButton = document.getElementById('submit');
$geolocateButton.addEventListener('click', geolocate);
}
// const markers = JSON.parse(document.currentScript.getAttribute('markers'));

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
    const position = { lat: parseFloat(lat), lng: parseFloat(lng) };
    map = new google.maps.Map($map, {
        center: position,
        zoom: 12,
    });
    const markers = new google.maps.Marker({ position: position, map: map })
    getMarkers(location);
}
function getMarkers(coordinates){
       for (i = 0; i < coordinates.length; i++) {  
             markers = new google.maps.Marker({
          position: new google.maps.LatLng(coordinates),
          map: map
        })
   }}

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