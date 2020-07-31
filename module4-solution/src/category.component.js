(function () {
  "use strict";

  angular.module("MenuApp").component("categoryComponent", {
    templateUrl: "src/templates/category-component.html",
    bindings: {
      items: "<",
    },
  });
})();
