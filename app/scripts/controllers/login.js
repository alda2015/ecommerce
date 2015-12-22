'use strict';

angular.module('Login')
  .controller('LoginCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    $scope.test = "test";
    $scope.email = "email";
    $scope.pwd = "pwd";
    $scope.signin = function(){
    	LoginService.login($scope.email,$scope.pwd,function(response){

    	});
    }
  }])
  .factory('LoginService',['$http','$rootScope' ,'$cookies'
  	,function($http, $rootScope,$cookies){
  		var service = {};
  		service.login = function(email, pwd, cb){
  			$http.post('/ws/ecommerce_api/users/login',{
  				"email": email,
  				"mdp":pwd
  			}).success(function(response){
  				console.log('success ',response);
  				cb(response);
  			}).error(function(response){
  				console.log('failed ',response);
  				cb(response);
  			});

  		}
  		console.log('Init Service Login');
  		return service;

  }]);


