(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
var service = this;



service.setuserinfo = function (userinfo,item) {
  service.userdata=userinfo;
  service.useritem=item;
  };

}

})();
