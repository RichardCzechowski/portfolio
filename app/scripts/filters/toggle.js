'use strict';
angular.module('portfolioApp')
.filter('toggleFilter',function () {
  return function(items, toggles){
    var filtered = [];
    if (typeof items !== 'undefined' && typeof toggles !== 'undefined'){
      for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < toggles.length; j++) {
          if (items[i].type == toggles[j].name && toggles[j].value == true){
            filtered.push(items[i]);
          }
        }
      }
      return filtered;
    }
    else{
      return items;
    }
  }
});
