(function () {
  angular.module("MenuApp").config(routerConfig);

  routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider

      .state("home", {
        url: "/home",
        templateUrl: "src/templates/home.html",
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "src/templates/category.html",
        controller: "categoriesController as categories",
        resolve: {
          items: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getCategories();
            },
          ],
        },
      })
      .state("categories.items", {
        url: "/items/{categoryName}",
        templateUrl: "src/templates/item.html",
        controller: "itemsController as items",
        params: {
          categoryName: null,
        },
        resolve: {
          item: [
            "MenuDataService",
            "$stateParams",

            function (MenuDataService, $stateParams) {
              return MenuDataService.getItems($stateParams.categoryName);
            },
          ],
        },
      });
  }
})();
