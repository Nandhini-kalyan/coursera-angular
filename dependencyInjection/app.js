(function () {
  "use strict";
  angular
    .module("DIApp", [])

    .controller("DIController", DIFunction);
  DIFunction.$inject = ["$scope", "$filter", "$injector"];

  function DIFunction($scope, $filter, $injector) {
    $scope.name = "Nandhini";
    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };
    console.log($injector.annotate(DIFunction));
  }
})();
