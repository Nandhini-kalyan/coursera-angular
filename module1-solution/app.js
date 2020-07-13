(function () {
  "use strict";
  angular
    .module("lunchCheck", [])

    .controller("checkController", checkController);

  function checkController($scope) {
    $scope.listOfItems = "";

    $scope.main = function () {
      split($scope.listOfItems);
      check($scope.arr);
    };

    function split(listOfItems) {
      $scope.arr = listOfItems.split(",");
      removeBlank();
    }
    function check(arr) {
      var len = arr.length;
      var result;
      if (len == 0) {
        result = "Please enter data first";
      } else if (len <= 3) {
        result = "Enjoy!";
      } else {
        result = "Too much!";
      }

      $scope.result = result;
    }
    function removeBlank() {
      for (var i = 0; i < $scope.arr.length; i++) {
        if (isEmptyOrWhiteSpace($scope.arr[i])) {
          $scope.arr.splice(i, 1);
          removeBlank();
        }
      }
    }
    function isEmptyOrWhiteSpace(text) {
      return !/[^\s]/.test(text);
    }
  }
})();
