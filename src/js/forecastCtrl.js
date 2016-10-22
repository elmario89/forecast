angular.module('forecast')
  .controller('forecastCtrl', ['$scope', '$getWeatherSrv', forecastCtrl]);

function forecastCtrl($scope, $getWeatherSrv) {

  $scope.date = new Date();

  $scope.getPosition = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }

  $scope.getPosition();

  var lat, lng;
  function successFunction(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    $getWeatherSrv.getWeather(lat, lng).then(function(response) {
        $scope.weather = response
        console.log($scope.weather);
      });
  }
};