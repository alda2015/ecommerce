'use strict';

angular.module('Inscription')
  .controller('InscriptionCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.user = "";
    $scope.email = "email";
    $scope.pwd = "pwd";
    $scope.confpwd= "confpwd"
     $http({
    	method:"post",
    	url:"http://localhost:8080/ecommerce_api/users/addUser",
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
    $scope.inscription = function(){
    	console.log('>> ',$scope.email,$scope.pwd,$scope.confpwd);
    	//user = $scope.form;
    	console.log("user"+user);
    }
  }]);