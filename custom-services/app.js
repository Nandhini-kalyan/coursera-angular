(function () {
  angular
    .module("shoppingList", [])

    .controller("shoppingListAddItems", shoppingListaddItems)
    .controller("shoppingListShowItems", shoppingListShowItems)

    .service("shoppingListService", shoppingListService)
    .service("promiseCheck", promiseCheck);

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
  shoppingListService.$inject = ["$q", "promiseCheck"];
  function shoppingListService($q, promiseCheck) {
    var service = this;
    service.items = [];
    service.add = function (itemName, quantity) {
      // var promise = promiseCheck.checkName(itemName);
      // promise.then(
      //   function (response) {
      //     var nextpromise = promiseCheck.checkQuantity(quantity);
      //     nextpromise.then(
      //       function (response) {
      //         var item = {
      //           itemName: itemName,
      //           quantity: quantity,
      //         };
      //         service.items.push(item);
      //       },
      //       function (error) {
      //         console.log(error.message);
      //       }
      //     );
      //   },
      //   function (error) {
      //     console.log(error.message);
      //   }
      // );

      var promise = promiseCheck.checkName(itemName);
      var nextpromise = promiseCheck.checkQuantity(quantity);
      $q.all([promise, nextpromise])
        .then(function (response) {
          var item = {
            itemName: itemName,
            quantity: quantity,
          };
          service.items.push(item);
        })
        .catch(function (error) {
          console.log(error.message);
        });
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
  promiseCheck.$inject = ["$q", "$timeout"];
  function promiseCheck($q, $timeout) {
    var service = this;
    service.checkName = function (name) {
      var deferred = $q.defer();

      var result = {
        message: "",
      };

      $timeout(function () {
        // Check for cookies
        if (name.toLowerCase().indexOf("cookie") === -1) {
          deferred.resolve(result);
        } else {
          result.message = "Stay away from cookies";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    };
    service.checkQuantity = function (quantity) {
      var deferred = $q.defer();

      var result = {
        message: "",
      };

      $timeout(function () {
        // Check for cookies
        if (quantity < 6) {
          deferred.resolve(result);
        } else {
          result.message = "too much !!!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  }
})();
