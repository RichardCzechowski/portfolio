'use strict';
angular.module('portfolioApp')
.controller('HeaderCtrl',['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}]);
