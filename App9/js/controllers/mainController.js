(function () {

    angular.module(appConfig.appName).controller("main",
            function ($scope, patternService) {
                patternService.getPatterns().then(function (result) {
                    $scope.data = result;
                })
    });

})();