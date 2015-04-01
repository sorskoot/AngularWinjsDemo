
(function () {
    angular.module(appConfig.appName).controller("mainController", mainController);

    function mainController($scope, patternService) {
        var vm = this;
        patternService.getPatterns().then(function (result) {
            vm.data = result;
        })
    };    
})();