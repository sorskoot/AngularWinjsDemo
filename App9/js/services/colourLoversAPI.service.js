(function () {
    angular.module(appConfig.appName).factory(
        "colourLoversAPI", colourLoversAPI);

    colourLoversAPI.$inject = ['$http'];

    function colourLoversAPI($http) {
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

        self.getPatternById = function (id) {
            return new WinJS.Promise(
                  function (complete, error) {
                      return self.http.get('http://www.colourlovers.com/api/patterns/' + id + '?format=json')
                            .success(function (e) {
                                complete(e);
                            });
                  });
        }

        self.getColors = function () {
            return new WinJS.Promise(
                  function (complete, error) {
                      return self.http.get('http://www.colourlovers.com/api/colors?format=json')
                            .success(function (e) {
                                complete(e);
                            });
                  });
        }

        self.getColorById = function (id) {
            return new WinJS.Promise(
                  function (complete, error) {
                      return self.http.get('http://www.colourlovers.com/api/color/' + id + '?format=json')
                            .success(function (e) {
                                complete(e);
                            });
                  });
        }
        self.getPalettes = function () {
            return new WinJS.Promise(
                  function (complete, error) {
                      return self.http.get('http://www.colourlovers.com/api/palettes?format=json')
                            .success(function (e) {
                                complete(e);
                            });
                  });
        }
        self.getPaletteById = function (id) {
            return new WinJS.Promise(
                  function (complete, error) {
                      return self.http.get('http://www.colourlovers.com/api/palettes/' + id + '?format=json')
                            .success(function (e) {
                                complete(e);
                            });
                  });
        }

        return {
            getPatterns: self.getPatterns,
            getColors: self.getColors,
            getPalettes: self.getPalettes,
            getPatternById: self.getPatternById,
            getColorById: self.getColorById,
            getPaletteById: self.getPaletteById
        }
    };
})();