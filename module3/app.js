(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
.service('MenuSearchService', MenuSearchService)
.constant('urlJSON',"https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItem.html',
		scope: {
		  found: '<',
		  onRemove: '&'
		},
		controller: foundItemsDirectiveController,
		controllerAs: 'list',
		bindToController: true
	  };
  return ddo;
}

function foundItemsDirectiveController() {
  var list = this;
}
NarrowItDownController .$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var list = this;
    list.getnames = function (searchTerm){
				list.error=false;
				list.found=[];
         var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
				//  console.log('promise',promise);
				 promise.then(function (value) {
				 console.log('getnames',value);
      	//  console.log('getnames',value[1]);
				if(value.length == 0){

				 return list.error= true;
				}
				 list.found = value;
    		 })
    		.catch(function (error) {
      	//  console.log(error);
				 list.found = "Nothing found"
         })
				 }

    list.removeItem = function (itemIndex) {
  		  MenuSearchService.removeItem(itemIndex);
  	};
  };

MenuSearchService.$inject = ['urlJSON','$http']
function MenuSearchService(urlJSON,$http) {
  var service = this;
	var foundItems=[];

  service.getMatchedMenuItems = function (searchTerm) {
    var menu = this;
    // console.log("gettinghttps",urlJSON);
    // process result and only keep items that match
     return $http(
      {
          method: "GET",
          url: (urlJSON)
      }
     ).then(function (result) {
       var datos=result.data;
			 foundItems=[];//clean founditems to other click
      // console.log('datos',result)
        for(var i = 0; i < result.data.menu_items.length; i++)
        {
					var name = datos.menu_items[i].name;
          var description = datos.menu_items[i].description;
          // console.log('name',name);
          // console.log('searchTerm',searchTerm)
          if (name.toLowerCase().indexOf(searchTerm) !== -1)
		          {
		            var item = {
		              name :name,
		              description :description
		          }
          foundItems.push(item);
            // console.log('var found',found);
          }//if
        }//for
    // return processed items
    // console.log('matriz',found)
    // console.log('objeto return',foundItems);
    return foundItems;
    });// then

  };
	service.removeItem = function (itemIndex) {
		foundItems.splice(itemIndex, 1);
	};

}//end of service

})();//end of file
