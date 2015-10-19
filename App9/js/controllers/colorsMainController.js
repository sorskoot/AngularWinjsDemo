(function () {
    angular.module(appConfig.appName)
           .controller("colorsMainController", colorsMainController);

    colorsMainController.$inject = ['$location', 'colourLoversAPI', 
                                    'navigationService'];

    function colorsMainController($location, colourLoversAPI, 
                                  navigationService) {
        var vm = this;

        vm.click = function (color) {
            $location.path('/colorDetails/' + color.hex);
        }

        colourLoversAPI.getColors().then(function (result) {
            vm.data = result;
        })
    };
})();