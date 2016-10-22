;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getCitySrv', ['$http', getCitySrv]);

  function getCitySrv($http) {

    this.getCity = function(lat, lng) {

      // here we add reverse geocoding because openWeatherMap doesn't show city by my positioning
      // it does show station with name 'Kalininskoe', so we convert coordinates to city name
      // by google maps
      function getReverseGeocodingData(lat, lng) {
          var latlng = new google.maps.LatLng(lat, lng);
          var geocoder = new google.maps.Geocoder();

          geocoder.geocode({ 'latLng': latlng }, function (results, status) {
              if (status !== google.maps.GeocoderStatus.OK) {
                  alert(status);
              }
              if (status == google.maps.GeocoderStatus.OK) {
                  console.log(results);
                  var arrAddress = results[0].address_components;

                  for (var i = 0; i < arrAddress.length; i++) {
                    if (arrAddress[i].types[0] == "locality") {
                      console.log(arrAddress[i].long_name); // City name - now we should find how to use Eng language
                      return false;
                    }
                  }
              }
          });
      }

      getReverseGeocodingData(lat, lng);

      var API_KEY = window.localStorage.getItem('API_KEY');
      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng +'&appid=' + API_KEY,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        var data = response.data;
        // console.log(data);
      });

    };
  }
})();
