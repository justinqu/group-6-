// Get references to page elements

var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var currentCoordinates;

function getLocation(coords){
  console.log(coords)
  currentCoordinates = {
    lat: coords.coords.latitude,
    lng: coords.coords.longitude
  }
}
navigator.geolocation.getCurrentPosition(getLocation, onGeolocateError)
// The API object contains methods for each kind of request we'll make
var API = {
  saveMarker: function () {
    //example=> {name: 'john'}
    // example = {name: $exampleText, type:$exampleDescription}
    navigator.geolocation.getCurrentPosition(getLocation, onGeolocateError)
    console.log(currentCoordinates)
    var $exampleText = document.getElementById("name-input").value;
    var $exampleDescription = document.getElementById("description-input").value;
    example = { name: $exampleText, type: $exampleDescription, lat: parseFloat(currentCoordinates.lat), lng: currentCoordinates.lng }
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/markers",
      // data: example,
      dataType: 'json',
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "/api/examples/",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var name = $("#name-input").val();
  var threat = $("#description-input").val();

  API.saveMarker();

  // $exampleText.val("");
  // $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
  });
};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
