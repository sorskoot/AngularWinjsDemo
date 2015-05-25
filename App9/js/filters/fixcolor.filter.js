(function (angular) {
    "use strict";

    angular.module(appConfig.appName).filter("ttFixColor", ttFixColor);

    function ttFixColor() {
        return function (input) {
            if (input
                && (input.length == 3  // 000
                || input.length == 4   // #000
                || input.length == 6   // 000000
                || input.length == 7   // #000000
                || input.length == 8   // 00000000
                || input.length == 9)  // #00000000
                ) {
                if (input[0] === '#') {
                    return input;
                }
                else return '#' + input;
            }

            return '#00000000';
        }
    }

})(angular);