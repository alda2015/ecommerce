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
angular.module('Inscription',[]);
console.log("app.js");
angular
  .module('ecommerceApp', [
    'ngRoute','Login','Inscription'
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

      .when('/inscription',{
        templateUrl:'views/inscription.html',
        controller:'InscriptionCtrl',
        //controllerAs:'signup'
      })
  });
