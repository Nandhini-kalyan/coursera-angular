(function () {
  "use strict";
  angular
    .module("calculatorApp", [])

    .controller("calculatorController", calculatorController)

    .filter("loves", lovesFilter)

    .filter("truth", truthFilter);
  calculatorController.$inject = ["$scope", "lovesFilter"];

  function calculatorController($scope, lovesFilter) {
    $scope.original = "I like Chocolates";
    $scope.change = lovesFilter($scope.original);
    $scope.name = "";
    $scope.total = 0;
    $scope.display = function () {
      var total = calculate();
      $scope.total = total;
    };
    $scope.watchers = function () {
      console.log($scope);
    };
    function calculate() {
      var total = 0;
      for (var i = 0; i < $scope.name.length; i++) {
        total += $scope.name.charCodeAt(i);
      }
      return total;
    }
  }
  function lovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("like", "love");
      return input;
    };
  }
  function truthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
