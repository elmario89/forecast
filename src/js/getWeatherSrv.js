;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getWeatherSrv', ['$http', getWeatherSrv]);

  function getWeatherSrv($http) {

    this.getWeather = function(city, lat, lng) {
      var API_KEY = window.localStorage.getItem('API_KEY'), url;
      console.log(city, lat, lng)

      if (city) {
        url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + API_KEY + '&units=metric';
      } else {
        url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng +'&appid=' + API_KEY + '&units=metric';
      }

      var promise = $http({
        method: 'GET',
        url: url,
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
