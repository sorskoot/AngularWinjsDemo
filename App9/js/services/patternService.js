(function () {
    angular.module(appConfig.appName).factory(
        "patternService", function ($http) {
            var self = this;
            self.http = $http;

            self.getPatterns = function () {
                return new WinJS.Promise(
                      function (complete, error) {
                          return self.http.get('http://www.colourlovers.com/api/patterns?format=json')
                                .success(function (e) {
                                    complete(e);
                                });
                      });
            }

            return {getPatterns:self.getPatterns}
        });
})();