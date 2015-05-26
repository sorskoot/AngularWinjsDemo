(function () {
    "use strict";

    angular.module(appConfig.appName).controller("colorDetailsController", colorDetailsController);

    colorDetailsController.$inject = ['colourLoversAPI', '$routeParams'];
    
    function colorDetailsController(colourLoversAPI, $routeParams) {
        var vm = this;
        
        colourLoversAPI.getColorById($routeParams.colorId).then(function (result) {
            vm.data = result[0];
        })
    };
})();