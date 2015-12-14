'use strict';

/**
 * @ngdoc overview
 * @name ecommerceApp
 * @description
 * # ecommerceApp
 *
 * Main module of the application.
 */
angular
  .module('ecommerceApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
