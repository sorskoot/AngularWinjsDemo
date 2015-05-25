/// <reference path="../lib/moment.js" />
(function (angular) {
    "use strict";

    angular.module(appConfig.appName).filter("ttDate", ttDateFilter);

    function ttDateFilter(){
        return function (input, format) {
            if (input) {
                var d = new moment(input);
                var s = d.format(format).toString();
                return s;
            }
        }
    }

})(angular);