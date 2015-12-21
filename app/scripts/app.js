'use strict';

/**
 * @ngdoc overview
 * @name ecommerceApp
 * @description
 * # ecommerceApp
 *
 * Main module of the application.
 */

angular.module('Login',[]);

angular
  .module('ecommerceApp', [
    'ngRoute','Login'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      /*.otherwise({
        redirectTo: '/'
      });*/
  });
