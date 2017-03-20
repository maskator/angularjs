(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject =['UserService','ApiPath'];
function MyinfoController(UserService,ApiPath) {

  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  console.log('userservice',UserService);

  $ctrl.user =  UserService.userdata;
  $ctrl.item =  UserService.useritem;


}

})();
