(function () {
  angular.module("routingApp", ["ui.router"]).config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/tab1");
    $stateProvider
      .state("tab1", {
        url: "/tab1",
        templateUrl: "src/tab1.html",
      })
      .state("tab2", {
        url: "/tab2",
        templateUrl: "src/tab2.html",
      });
  }
})();
