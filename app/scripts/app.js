'use strict';

/**
 * @ngdoc overview
 * @name yieldifyApp
 * @description
 * # yieldifyApp
 *
 * Main module of the application.
 */
angular
  .module('yieldifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
