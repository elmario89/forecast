angular.module('forecast')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/forecast");

    $stateProvider
      .state('forecast', {
        url: "/forecast",
        templateUrl: "js/forecastTmpl.html"
      })
  });