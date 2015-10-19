(function (angular) {
    angular.module(appConfig.appName)
            .service('navigationService', NavigationSvc)

    NavigationSvc.$inject = ['$rootScope', '$log', '$location'];

    function NavigationSvc($rootScope, $log, $location) {
        // this service keeps AngularJS rounting and
        // WinJS navigation systems in sync.
        var nav = WinJS.Navigation,
            navGuard = false;

        // listen to WinJS framework events (for when I use the back button)
        nav.addEventListener('navigating', function (e) {
            // when I navigate using the back button or similar
            if (navGuard == false)
                $rootScope.$apply(function () {
                    $location.path(e.detail.location);
                });
        }, false);

        // listen to AngularJS routing events
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next.originalPath && nav.location != next.originalPath) {
                navGuard = true;
                nav.navigate(next.originalPath)
                navGuard = false;
            };
        });
    };

}(angular));
