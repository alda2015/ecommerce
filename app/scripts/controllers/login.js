'use strict';

angular.module('Login')
  .controller('LoginCtrl', ['$scope',function ($scope) {
    $scope.test = "test";
    $scope.email = "email";
    $scope.pwd = "pwd";
    $scope.signin = function(){
    	console.log('>> ',$scope.email,$scope.pwd);
    }
  }]);

