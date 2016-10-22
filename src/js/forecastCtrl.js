angular.module('forecast')
  .controller('forecastCtrl', ['$scope', '$getCitySrv', forecastCtrl]);

function forecastCtrl($scope, $getCitySrv) {

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
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $getCitySrv.getCity(lat, lng);
  }

};