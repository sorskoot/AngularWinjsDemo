(function () {
    angular.module(appConfig.appName).controller("shellController", shellController);

    function shellController($location, $rootScope, navigationService) {
        var vm = this;
        vm.paneHidden = true;
        vm.menuMode = mode.medium;
        vm.togglePane = togglePane;
        vm.navigateToColors = navigateToColors;
        vm.navigateToPalettes = navigateToPalettes;
        vm.navigateToPatterns = navigateToPatterns;

        initUpdateSplitView();

        /////////////////
        function navigateToColors() {
            $location.path("/colorsMain");
        }
        function navigateToPalettes() {
            $location.path("/palettesMain");
        }
        function navigateToPatterns() {
            $location.path("/patternsMain");
        }
        function togglePane() {
            vm.paneHidden = !vm.paneHidden;
        }

        function initUpdateSplitView() {
            Object.keys(mode).forEach(function (key) {
                var mq = window.matchMedia(mode[key].mediaquery);
                mq.addListener(updateSplitView);
            });
            updateSplitView();
        };

        function updateSplitView() {
            // Remove all the size classes
            Object.keys(mode).forEach(function (key) {
                vm.class = '';
            });

            var found;
            Object.keys(mode).forEach(function (key) {
                if (!found) {
                    var mq = window.matchMedia(mode[key].mediaquery);
                    if (mq.matches) {
                        found = key;
                    }
                }
            });

            if (found) {
                // Update the SplitView based on the size
                vm.shownDisplayMode = mode[found].shownDisplayMode;
                vm.hiddenDisplayMode = mode[found].hiddenDisplayMode;
                vm.class = found
                if (found === 'large') {
                    vm.paneHidden = false;
                } else {
                    vm.paneHidden = true;
                }
            }
        };

    };
    var mode = {
        // order very important!
        small: {
            mediaquery: 'all and (max-width: 800px)',
            shownDisplayMode: WinJS.UI.SplitView.ShownDisplayMode.overlay,
            hiddenDisplayMode: WinJS.UI.SplitView.HiddenDisplayMode.none,
        },
        medium: {
            mediaquery: 'all and (max-width: 1024px)',
            shownDisplayMode: WinJS.UI.SplitView.ShownDisplayMode.overlay,
            hiddenDisplayMode: WinJS.UI.SplitView.HiddenDisplayMode.inline,
        },
        large: {
            mediaquery: 'all and (min-width: 1024px)',
            shownDisplayMode: WinJS.UI.SplitView.ShownDisplayMode.inline,
            hiddenDisplayMode: WinJS.UI.SplitView.HiddenDisplayMode.inline,
        }
    };

})();