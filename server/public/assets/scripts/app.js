var myApp = angular.module('myApp', []);

myApp.controller('IntroController', ['$scope', '$http', function($scope, $http){
  $scope.employeeArray = [];

  $scope.meow = function(){
    console.log("Meow");
  };
  $scope.saveEmployee = function(value){
    console.log(value);
    $scope.employeeArray.push(value);
    $scope.employee = {};
    console.log($scope.employeeArray);
  };
  $scope.getData = function(){
       $http.get("/students").then(function(response){
         $scope.allStudents = response.data.students;
       });
  }
  $scope.getData();
}]);
