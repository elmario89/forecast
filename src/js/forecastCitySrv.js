;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getCitySrv', ['$http', getCitySrv]);

  function getCitySrv($http) {

    this.getCity = function(lat, lng) {

      var API_KEY = window.localStorage.getItem('API_KEY');
      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng +'&appid=' + API_KEY,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        var data = response.data;
        console.log(data);
      });

    };
  }
})();
