(function () {
  "use strict";
  angular.module("public").controller("signUpController", signUpController);
  signUpController.$inject = ["MenuService"];
  function signUpController(MenuService) {
    var signUp = this;
    signUp.signedUp = false;
    signUp.go = function () {
      signUp.signedUp = true;
      MenuService.firstName = signUp.firstName;
      MenuService.lastName = signUp.lastName;
      MenuService.emailId = signUp.emailId;
      MenuService.phoneNumber = signUp.phoneNumber;
      MenuService.shortName = signUp.shortName;
      MenuService.signedUp = true;
    };
  }
})();
