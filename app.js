(function () {
  "use strict";
  angular
    .module("calculatorApp", [])

    .controller("calculatorController", function ($scope) {
      $scope.name = "";
      $scope.total = 0;
      $scope.display = function () {
        var total = calculate();
        $scope.total = total;
      };
      function calculate() {
        var total = 0;
        for (var i = 0; i < $scope.name.length; i++) {
          total += $scope.name.charCodeAt(i);
        }
        return total;
      }
    });
})();
