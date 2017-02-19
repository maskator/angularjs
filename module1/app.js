(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.message = "Empty list please insert data";

  $scope.tooMuch = function () {
    if ($scope.list == ""){
      return $scope.message= "Please insert data"
    };
   var list=($scope.list).split(",");
   var count=list.length;
  //  console.log(count);
  //  console.log(list);
   for (var i=0;i < count;i++){
       if (list[i]==""){
       return $scope.message="There are an empty product in list, please review it!"
     };
   };
   if (count < 4){
     return $scope.message="Enjoy!"
   };
   if (count>3){
     return $scope.message="Too much!"
   };


  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
