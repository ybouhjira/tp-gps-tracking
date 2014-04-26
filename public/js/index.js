var gpsTracking = angular.module('gps-tracking', ['google-maps']);

gpsTracking.controller('MapController', function($scope) {

  $scope.map = {
    center: {
        latitude: 0,
        longitude: 0
    },
    zoom: 8
  };

});