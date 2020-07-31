(function () {
  "use strict";
  angular.module("Data").service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http"];
  function MenuDataService($http) {
    var service = this;
    var categories = [];
    var items = [];
    service.getCategories = function () {
      var response = $http({
        method: "GET",
        url: " https://davids-restaurant.herokuapp.com/categories.json",
      });
      var result = response.then(function (response) {
        categories = response.data;
        console.log(categories);
        return categories;
      });
      return result;
    };
    service.getItems = function (shortName) {
      items = [];
      var response = $http({
        method: "GET",
        url:
          " https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          shortName +
          "",
      });

      var result = response.then(function (response) {
        var menu = response.data.menu_items;
        menu.forEach(function (item) {
          items.push(item);
        });
        return items;
      });

      return result;
    };
  }
})();
