(function () {
"use strict";

angular.module('public')
// .component('signup', {
//   templateUrl: 'src/public/signup/signup.html',
//   // bindings: {
//   //   user: '<'
//   // },
//   controller: RegistrationController
// });

.controller('RegistrationController', RegistrationController);



RegistrationController.$inject =['userItems','ApiPath','UserService'];
function RegistrationController(userItems,ApiPath,UserService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  // $ctrl.items = userItems;

  // console.log('items',userItems);
  $ctrl.submit = function () {
    $ctrl.completed = true;
  };

  $ctrl.checkitem = function (item){
    for(var i=0;i<userItems.menu_items.length;i++){
      // console.log('for',userItems.menu_items[i].short_name);
      if (userItems.menu_items[i].short_name === item)
      {
        // console.log('found',userItems.menu_items[i]);
        $ctrl.foundItem = userItems.menu_items[i];
        $ctrl.error = false;
        $ctrl.completed = true;
        $ctrl.found = true;
        UserService.setuserinfo($ctrl.user,$ctrl.foundItem);
        return;
      }
    }
    return $ctrl.error = true;
  };
}

})();
