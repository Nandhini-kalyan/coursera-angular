(function () {
  "use strict";

  angular.module("common").service("MenuService", MenuService);

  MenuService.$inject = ["$http", "ApiPath"];
  function MenuService($http, ApiPath) {
    var service = this;
    service.signedUp = false;
    service.getFavItem = function (shortName) {
      return $http
        .get(
          "https://chinese-restaurant-app.herokuapp.com/menu_items/" +
            shortName.toUpperCase() +
            ".json"
        )
        .then(function (response) {
          return response.data;
        });
    };

    service.getCategories = function () {
      return $http.get(ApiPath + "/categories.json").then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { category: category };
      }

      return $http
        .get(ApiPath + "/menu_items.json", config)
        .then(function (response) {
          return response.data;
        });
    };

    service.getMenuItems = function (shortName) {
      var config = {};
      if (shortName) {
        config.params = { category: shortName };
      }

      return $http
        .get(ApiPath + "/menu_items.json", config)
        .then(function (response) {
          return response.data;
        });
    };

    service.getCategory = function (shortName) {
      return $http
        .get(ApiPath + "/categories/" + shortName + ".json")
        .then(function (response) {
          return response.data;
        });
    };

    service.getMenuItem = function (shortName) {
      return $http
        .get(ApiPath + "/menu_items/" + shortName + ".json")
        .then(function (response) {
          return response.data;
        });
    };

    service.saveMenuItem = function (menuItem) {
      return $http
        .put(ApiPath + "/menu_items/" + menuItem.short_name, menuItem)
        .then(function (response) {
          return response.data;
        });
    };
  }
})();