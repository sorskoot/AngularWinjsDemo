(function (angular) {

    angular.module(appConfig.appName).service('adapterService', adapterService);

    adapterService.$inject = ['$q'];

    function adapterService($q) {
        return {
            toAngularPromise: function (winjsPromise) {
                var deferred = $q.defer();

                winjsPromise.then(function (value) {
                    deferred.resolve(value);
                }, function(err) {
                    deferred.reject(err);
                }, function(value) {
                    deferred.notify(value);
                });

                return deferred.promise;
            },

            toWinJSPromise: function(angularPromise) {
                var signal = new WinJS._Signal();

                angularPromise.then(function(value) {
                    signal.complete(value);
                }, function(err) {
                    signal.error(err);
                }, function(value) {
                    signal.progress(value);
                });

                return signal.promise;
            }
        }
    };

})(angular);
