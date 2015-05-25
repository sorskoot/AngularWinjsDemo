/// <reference path="../lib/moment.js" />
(function (angular) {
    "use strict";

    angular.module(appConfig.appName).filter("ttFromNow", ttFromNowFilter);

    function ttFromNowFilter() {
        return function (input, withoutSuffix) {
            if (input) {
                return new moment(input).fromNow(withoutSuffix);
            }
        }
    }

})(angular);