'use strict';

/**
 * @ngdoc overview
 * @name ecommerceApp
 * @description
 * # ecommerceApp
 *
 * Main module of the application.
 */


angular.module('Login',['ngCookies']);
angular.module('Inscription',[]);
angular.module('News',[]);

angular
  .module('ecommerceApp', [
    'ngRoute','Login','Inscription', 'News'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
        //controllerAs: 'login'
      })
      .when('/inscription',{
        templateUrl:'views/inscription.html',
        controller:'InscriptionCtrl'
        //controllerAs:'signup'
      })
      .when('/news',{
        templateUrl: 'views/news.html',
        controller:  'NewsCtrl'
      })
  });
