angular.module('forecast')
  .controller('aheadCtrl', ['$scope', '$state', '$getWeatherSrv', aheadCtrl]);

function aheadCtrl($scope, $state, $getWeatherSrv) {
  $scope.city = $state.params.city;

  // $getWeatherSrv.get5daysWeather($scope.city).then(function(response) {
  //   console.log(response);
  //   // $scope.weather = response;
  //   // $scope.weather.temp = Math.round($scope.weather.temp);
  
  //   // $scope.showPreloader = false;
  // });

  $scope.test = $getWeatherSrv.get5daysWeather($scope.city);
};