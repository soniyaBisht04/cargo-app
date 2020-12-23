'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute','rzSlider', 'ui.bootstrap',
  'myApp.sidenav',
  'myApp.locationMap',
  'myApp.routeDetails',
  'myApp.dateTimeDetails',
  'myApp.freightDetails',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);
