angular.module('forecast')
  .controller('aheadCtrl', ['$scope', '$state', '$getWeatherSrv', aheadCtrl]);

function aheadCtrl($scope, $state, $getWeatherSrv) {
  $scope.city = $state.params.city;

  $scope.test = $getWeatherSrv.get5daysWeather($scope.city).then(function(response) {
    var weather = response;

    console.log(weather);

    var length = weather.data.list.length-1;

    $scope.startDate = weather.data.list[0].dt * 1000;
    $scope.endDate = weather.data.list[length].dt * 1000;

    $scope.showPreloader = false;
  });
};