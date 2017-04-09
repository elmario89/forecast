;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getWeatherSrv', ['$http', getWeatherSrv]);

  function getWeatherSrv($http) {

    this.getWeather = function(city, lat, lng) {
      var API_KEY = window.localStorage.getItem('API_KEY'), url;

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
          var data = {
            situation: response.data.weather[0].description,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            icon: "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png"
          };
          return data;
      }, function(error) {
        if (error.status == 502) {
          alert('No city was found');
        } else {
          alert(error.statusText);
        }
      });

      return promise;
    };

    this.get5daysWeather = function(city) {
      var test = city;

      return test;
    }
  }
})();
