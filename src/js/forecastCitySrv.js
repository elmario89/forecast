;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$getCitySrv', ['$http', getCitySrv]);

  function getCitySrv($http) {

    this.getCity = function(lat, lng) {

      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lng +'&appid=e314e59cc5a10bf8699c6cfafd41d145',
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
