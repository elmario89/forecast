angular.module('forecast')
  .config(function($stateProvider, $urlRouterProvider) {
    window.localStorage.setItem('API_KEY', 'e314e59cc5a10bf8699c6cfafd41d145');

    $urlRouterProvider.otherwise("/forecast");

    $stateProvider
      .state('forecast', {
        url: "/forecast",
        templateUrl: "js/forecastTmpl.html"
      })
  });