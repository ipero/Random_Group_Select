var myApp = angular.module('myApp', []);
var teamNum;
var studentsArrayHolder = ["Enrique", "Tracey", "Carl", "Joette", "Jeremy", "Kenzie",
"Aaron", "Evan", "Biz", "Brady", "Roman", "Thomas", "Miles", "Michelle", "Neil",
"Hank", "Mike", "Mark", "Riley", "Matthew"];


myApp.controller('IntroController', ['$scope', '$http', function($scope, $http){
  $scope.newArrayOfArray = [];
  //holds array of buttons number
  $scope.teamArray = [];

  $scope.allStudents = studentsArrayHolder;

  $scope.allStudents = [];
  for(var i = 0; i < studentsArrayHolder.length; i++){
    $scope.allStudents.push(studentsArrayHolder[i]);
  }

  //get possible team Number
  teamNum = Math.floor($scope.allStudents.length/2);

  //set buttons
  function setButton(value){
    var counter = 1;
    while (counter<=teamNum){
      $scope.teamArray.push(counter);
      counter++;
    }
    $scope.teamArray.shift();
  }
  //generate buttons base on team number
  setButton(teamNum);

  //regenerate students to teams
  $scope.refresh = function(){
    $scope.allStudents = [];
    $scope.newArrayOfArray = [];

    for(var i = 0; i < studentsArrayHolder.length; i++){
      $scope.allStudents.push(studentsArrayHolder[i]);
    }

    $scope.numGroups($scope.numOfTeams);
  }

  //generate groups with students
  $scope.numGroups = function(number){
    $scope.numOfTeams = number;
    $scope.allStudents = shuffleArray($scope.allStudents);

    var peoplePerGroup = Math.ceil(studentsArrayHolder.length/number);

    for(var i=0; i<peoplePerGroup; i++){
      for(var j=0; j<number; j++){
        if($scope.allStudents[0]){

          //Because we cannot directly declare multidimension arrays in JS
          //We first need to assign empty array to "falsy" element of $scope.newArrayOfArray
          if (!$scope.newArrayOfArray[j]){
            $scope.newArrayOfArray[j] = [];
          }
          $scope.newArrayOfArray[j][i] = $scope.allStudents.pop();
        }
      }
    }

  }

  //function to shuffle array randomly
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
