angular.module('forecast')
  .controller('forecastCtrl', ['$scope', '$getWeatherSrv', '$getCitySrv', forecastCtrl]);

function forecastCtrl($scope, $getWeatherSrv, $getCitySrv) {

  $scope.date = new Date();

  $scope.getPosition = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }

  $scope.getPosition();

  function successFunction(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    $getWeatherSrv.getWeather(lat, lng).then(function(response) {
      $scope.weather = response;
      console.log($scope.weather);
    });

    // here we add reverse geocoding because openWeatherMap doesn't show city by my positioning
    // it does show station with name 'Kalininskoe', so we convert coordinates to city name
    // by google maps
    var city = $getCitySrv.getCity(lat, lng);
  }
};