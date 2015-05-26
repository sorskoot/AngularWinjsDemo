(function (angular) {
    "use strict";
    
    angular.module(appConfig.appName).directive('ttBackButton', ttBackButton);

    function ttBackButton() {
        return {
            restrict: "E",
            replace: true,
            template: '<button data-win-control="WinJS.UI.BackButton"></button>',
            link: function (scope, element, attrs) {
                WinJS.UI.process(element[0]);
            }
        }
    }
})(angular);