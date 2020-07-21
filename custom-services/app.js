(function () {
  angular
    .module("shoppingList", [])

    .controller("shoppingListAddItems", shoppingListaddItems)
    .controller("shoppingListShowItems", shoppingListShowItems)

    .service("shoppingListService", shoppingListService);

  shoppingListaddItems.$inject = ["shoppingListService"];
  function shoppingListaddItems(shoppingListService) {
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.quantity = "";

    itemAdder.addItem = function () {
      shoppingListService.add(itemAdder.itemName, itemAdder.quantity);
    };
  }
  shoppingListShowItems.$inject = ["shoppingListService"];
  function shoppingListShowItems(shoppingListService) {
    var itemShow = this;
    itemShow.items = shoppingListService.getItems();
    itemShow.removeItem = function (x) {
      shoppingListService.removeItem(x);
    };
  }

  function shoppingListService() {
    var service = this;
    service.items = [];
    service.add = function (itemName, quantity) {
      var item = {
        itemName: itemName,
        quantity: quantity,
      };
      service.items.push(item);
    };
    service.removeItem = function (itemIndex) {
      console.log(itemIndex);
      if (itemIndex != -1) {
        service.items.splice(itemIndex, 1);
      }
    };
    service.getItems = function () {
      return service.items;
    };
  }
})();
