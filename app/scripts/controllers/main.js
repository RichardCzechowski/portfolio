'use strict';
angular.module('portfolioApp')
.controller('MainCtrl',['$scope', '$timeout', 'SettingsFactory', function ($scope, $timeout, SettingsFactory) {
  //Variable Initialization
  var portfolio = new Firebase("https://portfolio-web.firebaseio.com/");
  $scope.data = { projects: [], temp: [] };
  $scope.techs = {};
  //End Variable Initialization

  $scope.getData = function (){
    portfolio.on("value", function(snapshot) {
      $scope.$apply(function(){
        snapshot = snapshot.val();
        for (var key in snapshot){
          $scope.data.temp.push(snapshot[key]);
        }
        $timeout(function() {
          $scope.data.projects = $scope.data.temp;
          $scope.sortSkills($scope.data.projects);
          $scope.toggles = SettingsFactory.get();
          console.log($scope.data.projects);
        })
      });
    });
  };

  $scope.getData();

  $scope.sortDate = function(project) {
    var date = new Date(project.dateEnd);
    return date;
  };

  $scope.sortSkills = function(projects){
    for (var i = 0; i< projects.length; i++){
      for (var k = 0; k<projects[i].technology.length; k++){
        if ($scope.techs.hasOwnProperty(projects[i].technology[k])){
          $scope.techs[projects[i].technology[k]].count++;
        }
        else{
          $scope.techs[projects[i].technology[k]] = {value: true, count: 1};
        }
      }
    }
    console.log($scope.techs);
  }
}]);
