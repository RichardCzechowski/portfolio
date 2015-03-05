//Factory that holds money when switching between pages.
angular.module('portfolioApp')
.factory('PortfolioFactory', ['$window', '$timeout', function($window, $timeout){
  var portfolio = new $window.Firebase("https://portfolio-web.firebaseio.com/");
  var projects = [];
  function set() {
    portfolio.on("value", function(snapshot) {
      projects = [];
      snapshot = snapshot.val();
      for (var key in snapshot){
        projects.push(snapshot[key]);
      }
      console.log(projects);
      $timeout(function() {
        return projects;
      });
    });
  }

  function get() {
    return projects;
  }

  return {
    set: set,
    get: get
  }

}]);
