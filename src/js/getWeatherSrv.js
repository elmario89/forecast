;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getWeatherSrv', ['$http', getWeatherSrv]);

  function getWeatherSrv($http) {

    this.getWeather = function(lat, lng) {
      var API_KEY = window.localStorage.getItem('API_KEY');

      var promise = $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng +'&appid=' + API_KEY,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        var data = response.data;
        return data;
      });

      return promise;
    };
  }
})();
