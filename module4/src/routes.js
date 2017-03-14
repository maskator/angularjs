(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categorieslist',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
      }]
    }
  })

  // .state('categoriesList.itemList', {
  //   url: '/items/{itemId}',
  //   templateUrl: 'src/templates/items.template.html',
  //   controller: "ItemListController as itemList"
  // });
  .state('itemList', {
    url: '/items/{short_name}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.short_name)
                .then(function (value) {
                  // console.log('itemlist movi',value);
                  // console.log(value.data.menu_items);
                  return value.data.menu_items;
                });
            }]

    }
  });

}

})();
