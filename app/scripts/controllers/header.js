'use strict';
angular.module('portfolioApp')
.controller('HeaderCtrl',['$scope', '$location', function ($scope, $location) {
  $scope.selectedIndex=0;
  $scope.$watch('selectedIndex', function(current, old) {
    console.log(current, old);
    switch(current) {
      case 0: $location.url("/"); break;
      case 1: $location.url("/about"); break;
      case 2: $location.url("/contact"); break;
      default: break;
    }
  });
}]);
