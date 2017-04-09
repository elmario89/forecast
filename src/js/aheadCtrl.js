angular.module('forecast')
  .controller('aheadCtrl', ['$scope', '$state', '$getWeatherSrv', '$buildChart', aheadCtrl]);

function aheadCtrl($scope, $state, $getWeatherSrv, $buildChart) {
  $scope.showPreloader = true;
  $scope.city = $state.params.city;

  $scope.test = $getWeatherSrv.get5daysWeather($scope.city).then(function(response) {
    var weather = response.data.list;

    var length = weather.length-1;

    $scope.startDate = weather[0].dt * 1000;
    $scope.endDate = weather[length].dt * 1000;

    var temp = [];

    for (var i = 0; i < weather.length; i++) {
      var item = weather[i].main.temp;
      temp.push(item);
    }

    $scope.showPreloader = false;

    $buildChart.buildBarChart(temp);
  });
};