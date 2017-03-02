(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;


  showList.items = ShoppingListCheckOffService.getShowItems();

  showList.removeItem = function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var  bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 }];
  var bought =[];

  service.getShowItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return bought;
  };

  service.removeItem = function (itemIndex) {
    var item = {
      name: items[itemIndex].name,
      quantity: items[itemIndex].quantity
    };
    bought.push(item);
    items.splice(itemIndex, 1);
  };


}

})();
