(function () {
  "use strict";

  angular.module("MenuApp").component("itemComponent", {
    templateUrl: "src/templates/item-component.html",
    bindings: {
      items: "<",
    },
  });
})();
