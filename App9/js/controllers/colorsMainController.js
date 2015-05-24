(function () {
    angular.module(appConfig.appName).controller("colorsMainController", colorsMainController);

    colorsMainController.$inject = ['$location', 'colourLoversAPI', 'navigationService'];

    function colorsMainController($location, colourLoversAPI, navigationService) {
        var vm = this;

        vm.click = function (id) {
            vm.selected = "clicked on:" + id;
            $location.path('/details/' + id);
        }

        colourLoversAPI.getColors().then(function (result) {
            vm.data = result;
        })
    };
})();