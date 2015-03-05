//Factory that holds money when switching between pages.
angular.module('portfolioApp')
.factory('SettingsFactory', function(){
  var settings = [
    {name: "app", value: true},
    {name: "game", value: true},
    {name: "education", value: true}
  ];
  function set(data) {
    settings = data;
  }
  function get() {
    return settings;
  }

  return {
    set: set,
    get: get
  }

});
