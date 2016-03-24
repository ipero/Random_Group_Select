var myApp = angular.module('myApp', []);
var teamNum;
var setButtonArray = [];
var studentsArrayHolder = ["Enrique", "Tracey", "Carl", "Joette", "Jeremy", "Kenzie",
"Aaron", "Evan", "Biz", "Brady", "Roman", "Thomas", "Miles", "Michelle", "Neil", "Hank", "Mike",
"Mark", "Riley", "Matthew"];


myApp.controller('IntroController', ['$scope', '$http', function($scope, $http){
  $scope.groupHolder = [];
  $scope.employeeArray = [];
  $scope.teamArray = [];
  $scope.students = [];
  $scope.allStudents = studentsArrayHolder;
  $scope.newArrayOfArray = [];


  $scope.getData = function(){
       $http.get("/students").then(function(response){
         //$scope.allStudents = response.data.students;

         teamNum= Math.floor(studentsArrayHolder.length/2);
         setButton(teamNum);
       });

  }
  $scope.getData();

  function setButton(value){
    var counter = 1;
    while (counter<=teamNum){
      $scope.teamArray.push(counter);
      counter++;
    }
  }
  $scope.numGroups = function(number){

    $scope.allStudents = shuffleArray($scope.allStudents);
    //console.log($scope.allStudents);

    var peoplePerGroup = Math.ceil(studentsArrayHolder.length/number);
    console.log(peoplePerGroup);
    //var counter = 1;
    // while(counter <= number){
    //   var group = [];
    //   for (var i=1; i<=peoplePerGroup; i++){
    //     if($scope.allStudents[0]){
    //       console.log("I'm here in ");
    //       group.push($scope.allStudents.pop());
    //     }
    //   }
    //   $scope.groupHolder.push(group);
    //   counter++;
    // }
    for(var i=0; i<peoplePerGroup; i++){
      for(var j=0; j<number; j++){
        if($scope.allStudents[0]){
          //Because we cannot directly declare multidimension arrays in JS
          //We first need to assign empty array to "falsy" to falsy element of $scope.newArrayOfArray
          if (!$scope.newArrayOfArray[j]){
            $scope.newArrayOfArray[j] = [];
          }
          $scope.newArrayOfArray[j][i] = $scope.allStudents.pop();
        }
      }
    }
    console.log($scope.newArrayOfArray);
  }
  function shuffleArray(array){
    for (var i = array.length - 1; i>0; i--){
      var j = Math.floor(Math.random()*(i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}]);
