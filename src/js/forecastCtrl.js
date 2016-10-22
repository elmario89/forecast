angular.module('forecast')
  .controller('forecastCtrl', ['$scope', forecastCtrl]);

function forecastCtrl($scope) {

  $scope.date = new Date();
};