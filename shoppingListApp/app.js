(function () {
  angular
    .module("shoppingListApp", [])

    .controller("shoppingController", shoppingController);
  var shoppingList1 = ["item1", "item2", "item3", "item4"];
  var shoppingList2 = [
    { item: "milk", quantity: 2 },
    { item: "cookie", quantity: 3 },
  ];
  shoppingController.$inject = ["$scope"];
  function shoppingController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addItem = function () {
      var newItem = {
        item: $scope.newItem,
        quantity: $scope.newQuantity,
      };
      $scope.shoppingList2.push(newItem);
    };
  }
})();
