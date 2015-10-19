(function () {
    angular.module(appConfig.appName).config(routeConfig);
    function routeConfig($routeProvider) {
        $routeProvider
          .when('/colorsMain', {
              templateUrl: '/views/main.html',
              controller: 'colorsMainController',
              controllerAs: 'main'
          })
          .when('/patternsMain', {
              templateUrl: '/views/main.html',
              controller: 'patternsMainController',
              controllerAs: 'main'
          })
          .when('/palettesMain', {
              templateUrl: '/views/main.html',
              controller: 'palettesMainController',
              controllerAs: 'main'
          })
          .when('/colorDetails/:colorId', {
              templateUrl: 'views/colorDetails.html',
              controller: 'colorDetailsController',
              controllerAs: 'color'
          })          
          .otherwise({
              redirectTo: '/colorsMain'
          });
    };
})();