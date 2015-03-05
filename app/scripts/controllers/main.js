'use strict';
angular.module('portfolioApp')
.controller('MainCtrl',['$scope', '$timeout', 'SettingsFactory', function ($scope, $timeout, SettingsFactory) {
  var portfolio = new Firebase("https://portfolio-web.firebaseio.com/");
  $scope.data = { projects: [], temp: [] };

  $scope.getData = function (){
    portfolio.on("value", function(snapshot) {
      $scope.$apply(function(){
        snapshot = snapshot.val();
        for (var key in snapshot){
          $scope.data.temp.push(snapshot[key]);
        }
        $timeout(function() {
          $scope.data.projects = $scope.data.temp;
          $scope.toggles = SettingsFactory.get();
          console.log($scope.toggles);
        })
      });
    });
  };

  $scope.getData();

  $scope.sortDate = function(project) {
    var date = new Date(project.dateEnd);
    return date;
  };

}]);
