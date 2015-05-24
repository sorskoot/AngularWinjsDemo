(function () {
    angular.module(appConfig.appName).controller("patternsMainController", patternsMainController);

    patternsMainController.$inject = ['$location', 'colourLoversAPI', 'navigationService'];

    function patternsMainController($location, colourLoversAPI, navigationService) {
        var vm = this;

        vm.click = function (id) {
            vm.selected = "clicked on:" + id;
            $location.path('/details/' + id);
        }

        colourLoversAPI.getPatterns().then(function (result) {
            vm.data = result;
        })
    };
})();