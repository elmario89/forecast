angular.module('forecast')
  .controller('forecastCtrl', ['$scope', '$getWeatherSrv', '$getCitySrv', forecastCtrl]);

function forecastCtrl($scope, $getWeatherSrv, $getCitySrv) {

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
    var lat = position.coords.latitude,
        lng = position.coords.longitude,
        city;

    $getWeatherSrv.getWeather(city, lat, lng).then(function(response) {

      $scope.weather = {
        situation: response.weather[0].description,
        temp: response.main.temp,
        wind: response.wind.speed,
        icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
      };

      $scope.weather.temp = Math.round($scope.weather.temp);
      // console.log(response);
    });

    $scope.city = getCity(lat, lng).then(function(city){
      console.log(city);
    });
    // console.log($scope.city)
  }

  // here we add reverse geocoding because openWeatherMap doesn't show city by my positioning
  // it does show station with name 'Kalininskoe', so we convert coordinates to city name
  // by google maps
  function getCity(lat, lng) {
    // console.log(lat, lng)
    return new Promise(function(resolve, reject) {
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
              // console.log(arrAddress[i].long_name);
              resolve(arrAddress[i].long_name);
            }
          }
        }
      });
    });
  };


  $scope.chooseCity = function(city) {
    var lat, lng;
    $getWeatherSrv.getWeather(city, lat, lng).then(function(response) {

      $scope.weather = {
        situation: response.weather[0].description,
        temp: response.main.temp,
        wind: response.wind.speed,
        icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
      };

      $scope.weather.temp = Math.round($scope.weather.temp);
      console.log(response);
    });
  }

};