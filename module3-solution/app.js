(function () {
  angular
    .module("NarrowItDownApp", [])

    .controller("NarrowItDownController", NarrowItDownController)

    .service("MenuSearchService", MenuSearchService)

    .directive("foundItems", FoundItems);

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.getMatchedMenuItems = function (searchTerm) {
      list.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    };
    list.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;
    var foundItems = [];

    service.removeItem = function (index) {
      foundItems.splice(index, 1);
    };

    service.getMatchedMenuItems = function (searchTerm) {
      foundItems = [];
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      });
      response.then(function (response) {
        var menu = response.data.menu_items;

        menu.forEach(function (item) {
          if (item.description.includes(searchTerm)) {
            foundItems.push(item);
          }
        });
      });
      return foundItems;
    };
  }

  function FoundItems() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        found: "<",
        onRemove: "&",
      },
    };
    return ddo;
  }
})();
