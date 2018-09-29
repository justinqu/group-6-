// $("#submit").click(function () {
// $.ajax({ 
//     url:"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD5fexPu3_Bzl4Uuy3UYNAJev-r7f2wLcU",
//     type: "GET", 
//     dataType: "JSON",
//     success: function(location){
//         console.log("hello");
//         $(".list-group-item").html(location.location); 
//         },
//     error: function (responseText, textStatus, errorThrown){
//         alert("Error - " + errorThrown);
//     }
// })
// var x = document.getElementById("demo")
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       console.log(pos);
//     })
// }})
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
    showMap(latitude, longitude);
}

function showMap(lat, lng) {
    const $map = document.getElementById('map');
    const position = { lat, lng };
    const map = new google.maps.Map($map, {
      center: position,
      zoom: 12
    });
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
geolocate();


// window.enableButtons = () => {
//     const $geolocateButton = document.getElementById('submit');
//     $geolocateButton.disabled = false;

//     console.log('Google Maps API loaded');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const $geolocateButton = document.getElementById('submit');
//     $geolocateButton.addEventListener('click', geolocate);
// });

// function geolocate() {
//     navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
// }

// function onGeolocateSuccess(coordinates) {
//     const { latitude, longitude } = coordinates.coords;
//     showMap(latitude, longitude);
// }

// function showMap(lat, lng) {
//     const $map = document.getElementById('map');
//     const position = { lat, lng };
//     const map = new google.maps.Map($map, {
//         center: position,
//         zoom: 6
//     });
// };  




// showMap();