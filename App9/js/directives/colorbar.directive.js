(function (angular) {
    "use strict";

    angular.module(appConfig.appName).directive("ttColorBar", ttColorBar);

    function ttColorBar($compile) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '/js/directives/colorbar.template.html',
            scope: {
                color: '='
            }
        };
    }

})(angular);