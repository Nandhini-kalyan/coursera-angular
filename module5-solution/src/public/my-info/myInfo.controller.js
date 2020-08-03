(function () {
  "use strict";
  angular.module("public").controller("myInfoController", myInfoController);
  myInfoController.$inject = ["MenuService"];
  function myInfoController(MenuService) {
    var myInfo = this;
    if (MenuService.signedUp) {
      myInfo.signedUp = MenuService.signedUp;
      myInfo.firstName = MenuService.firstName;
      myInfo.lastName = MenuService.lastName;
      myInfo.emailId = MenuService.emailId;
      myInfo.phoneNumber = MenuService.phoneNumber;
      myInfo.shortName = MenuService.shortName.toUpperCase();
      myInfo.item = MenuService.getFavItem(myInfo.shortName);
    }
  }
})();
