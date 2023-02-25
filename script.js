(function () {
    'use strict';

    setTimeout(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
          // Geolocation is not supported by this browser
        }
      }, 1000);
      
      function successCallback(position) {
        // Handle the user's location data here
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const forTheUser = document.getElementById("forTheUser");
        forTheUser.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
      }
      
      function errorCallback(error) {
        // Handle any errors that occur when trying to get the user's location
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
      }

}());