angular.module('forecast')
  .controller('forecastCtrl', ['$scope', '$getWeatherSrv', '$q', forecastCtrl]);

function forecastCtrl($scope, $getWeatherSrv, $q) {

  $scope.date = new Date();
  $scope.wrongCity;
  $scope.showPreloader = true;

  $scope.getPosition = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }

  $scope.getPosition();

  function successFunction(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude,
        city;

    $getWeatherSrv.getWeather(city, lat, lng).then(function(response) {
      if (!response) {
        $scope.wrongCity = true;
      } else {
        $scope.weather = response;
        $scope.weather.temp = Math.round($scope.weather.temp);
      }
      $scope.showPreloader = false;
    });

    var promise = getCity(lat, lng);
    promise.then(function(city) {
      $scope.city = city;
    })
  }

  // here we add reverse geocoding because openWeatherMap doesn't show city by my positioning
  // it does show station with name 'Kalininskoe', so we convert coordinates to city name
  // by google maps
  function getCity(lat, lng) {
    return $q(function(resolve, reject) {
      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
          var arrAddress = results[0].address_components;

          for (var i = 0; i < arrAddress.length; i++) {
            if (arrAddress[i].types[0] == "locality") {
              resolve(arrAddress[i].long_name);
            }
          }
        }
      });
    });
  };

  $scope.chooseCity = function(city) {
    $scope.wrongCity = false;
    $scope.showPreloader = true;

    var lat, lng;
    $scope.city = city;
    $getWeatherSrv.getWeather(city, lat, lng).then(function(response) {
      if (!response) {
        $scope.wrongCity = true;
      } else {
        $scope.weather = response;
        $scope.weather.temp = Math.round($scope.weather.temp);
      }

      $scope.showPreloader = false;
    });
  }

  $scope.downloadForecast = function(weather, city) {
    delete weather.icon;

    var forecast = `City: ${city}; situation: ${weather.situation}; temp: ${weather.temp}; wind speed: ${weather.wind};`;

    var filename = 'forecast';
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + forecast);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

};