(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemsList = this;
  itemsList.items = items;
  // console.log('inside item controller',itemsList.items);
}

})();
