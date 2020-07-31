(function () {
  "use strict";
  angular
    .module("MenuApp")
    .controller("categoriesController", categoriesController);
  categoriesController.$inject = ["MenuDataService", "items"];
  function categoriesController(MenuDataService, items) {
    var category = this;
    category.items = items;
  }
})();
