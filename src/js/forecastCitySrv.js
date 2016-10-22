;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$forecastCirtySrv', ['$http', forecastCirtySrv]);

  function forecastCirtySrv($http) {

    this.getCity = function(lat, lng) {
      console.log(lat, lng)
    };
  }
})();
