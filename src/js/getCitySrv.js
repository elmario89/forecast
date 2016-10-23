;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getCitySrv', [getCitySrv]);

  function getCitySrv() {

    this.getCity = function(lat, lng) {

      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
          var arrAddress = results[0].address_components;

          for (var i = 0; i < arrAddress.length; i++) {
            if (arrAddress[i].types[0] == "locality") {
              console.log(arrAddress[i].long_name); // City name - now we should find how to use Eng language
            }
          }
        }
      });
    };
  }
})();
