(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('urlJSON',"https://davids-restaurant.herokuapp.com");


// ShoppingListService.$inject = ['$q', '$timeout']
MenuDataService.$inject = ['urlJSON','$http']

function MenuDataService(urlJSON, $http) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (urlJSON + "/categories.json")
    });

    return response;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (urlJSON + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };

}

})();
