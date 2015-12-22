'use strict';

angular.module('Inscription')
  .controller('InscriptionCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.email = "email";
    $scope.pwd = "pwd";
    $scope.confpwd= "confpwd"
    $scope.inscription = function(){
    	$http({
        method:"post",
        url:"/ws/ecommerce_api/users/addUser",
        data:JSON.stringify({
            email: $scope.email,
            mdp: $scope.pwd 
            })
        })
     .success(
        function(result){
            console.log(result);
        }
        );
    }
  }]);