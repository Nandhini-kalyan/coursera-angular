(function () {
  angular
    .module("shoppingListApp", [])

    .controller("toBuyController", toBuyController)
    .controller("alreadyBoughtController", alreadyBoughtController)

    .service("shoppingListService", shoppingListService);

  toBuyController.$inject = ["shoppingListService"];
  function toBuyController(shoppingListService) {
    var toBuy = this;
    toBuy.toBuyArr = shoppingListService.getToBuyArr();

    toBuy.boughtFunc = function (index) {
      shoppingListService.boughtFunc(index);
    };
  }

  alreadyBoughtController.$inject = ["shoppingListService"];
  function alreadyBoughtController(shoppingListService) {
    var bought = this;

    bought.boughtArr = shoppingListService.getboughtArr();
  }

  function shoppingListService() {
    var service = this;
    toBuyArr = [
      { name: "cookies", quantity: 5 },
      { name: "cookies", quantity: 4 },
      { name: "cookies", quantity: 3 },
      { name: "cookies", quantity: 2 },
      { name: "cookies", quantity: 1 },
    ];
    boughtArr = [];
    service.getToBuyArr = function () {
      return toBuyArr;
    };
    service.getboughtArr = function () {
      return boughtArr;
    };

    service.boughtFunc = function (index) {
      boughtArr.push(toBuyArr[index]);
      toBuyArr.splice(index, 1);
    };
  }
})();
