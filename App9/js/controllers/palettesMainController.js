(function () {
    angular.module(appConfig.appName).controller("palettesMainController", palettesMainController);

    palettesMainController.$inject = ['$location', 'colourLoversAPI', 'navigationService'];

    function palettesMainController($location, colourLoversAPI, navigationService) {
        var vm = this;

        vm.click = function (id) {
            vm.selected = "clicked on:" + id;
            $location.path('/details/' + id);
        }

        colourLoversAPI.getPalettes().then(function (result) {
            vm.data = result;
        })
    };
})();