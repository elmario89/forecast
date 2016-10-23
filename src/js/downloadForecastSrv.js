;(function() {
  'use strict';
  angular
  .module('forecast')
  .service('$downloadForecastSrv', [downloadForecastSrv]);

  function downloadForecastSrv() {

    this.doDownload = function(weather, city) {
      var forecast = `City: ${city}; situation: ${weather.situation}; temp: ${weather.temp}; wind speed: ${weather.wind};`;

      var filename = city;
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + forecast);
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };
  }
})();
