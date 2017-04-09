angular.module('forecast')
  .config(function($stateProvider, $urlRouterProvider) {
    window.localStorage.setItem('API_KEY', 'e314e59cc5a10bf8699c6cfafd41d145');

    $urlRouterProvider.otherwise("/promise");

    $stateProvider
      .state('forecast', {
        url: "/forecast",
        templateUrl: "js/forecastTmpl.html"
      })
      .state('promise', {
        url: "/promise",
        templateUrl: "js/forecastTmpl.html"
      })
      .state('ahead', {
        url: "/forecastAhead",
        templateUrl: "js/forecastAheadTmpl.html"
      })
  });