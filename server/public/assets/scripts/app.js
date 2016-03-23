var myApp = angular.module('myApp', []);
var teamNum;
var setButtonArray;

myApp.controller('IntroController', ['$scope', '$http', function($scope, $http){

  $scope.employeeArray = [];
  $scope.teamArray = [];

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
         teamNum= response.data.students.length/2;
         console.log(teamNum);
         setButtonArray(teamNum);
       });
  }
  $scope.getData();
  function setButtonArray(value){
    var counter = 1;
    while ()
  }

}]);
