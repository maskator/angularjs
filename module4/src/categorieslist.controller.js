(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


// CategoriesListController.$inject = ['MenuDataService'];
// function CategoriesListController(MenuDataService) {
//   var categoriesList = this;
//   // console.log('controller');
//   var promise = MenuDataService.getAllCategories();
//   promise.then(function (value) {
//             categoriesList.categories = value.data;
//             // console.log(categoriesList.categories);
//           })
// }

CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categoriesList = this;
  categoriesList.categories = categories.data;
  // console.log('inside categories controller',categoriesList.categories);
}




})();
