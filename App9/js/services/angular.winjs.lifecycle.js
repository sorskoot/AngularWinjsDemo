(function () {
    "use strict";

    angular.module(appConfig.appName)
        .factory('angularWinjsLifecycle', function ($log, $location){//, angularWinjsLocalSettings, appState) {
            // this service manages the app lifecycle, it has to be resolved in 
            // the angular['app'].run() call so we bootstrap the winjs application
            // toghether with angularjs

            var app = WinJS.Application;
            var activation = Windows.ApplicationModel.Activation;
            var nav = WinJS.Navigation;
            var sched = WinJS.Utilities.Scheduler;
            var ui = WinJS.UI;

            app.onactivated = function (args) {
                if (args.detail.kind === activation.ActivationKind.launch) {

                    if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                        // TODO: This application has been newly launched. Initialize
                        // your application here.
                        $log.debug('WinJS Activated: previous state: NotRunning / ClosedByUser');
                    } else {
                        // TODO: This application has been reactivated from suspension.
                        // Restore application state here.
                        $log.debug('WinJS Activated: previous state: Suspended -> Terminated');

                        // reset the navigation stack
                        nav.history.current.initialPlaceholder = true;

                        // todo: restore the state here, or delegate to a service to do the job.
//                        var navigateToUrl = angularWinjsLocalSettings.values['currentUrl'];
                        $location.path('\main');
                    }
                    // Initialize then WinJS controls

                    // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
                    ui.disableAnimations();
                    var p = ui.processAll().then(function () {
                        return sched.requestDrain(sched.Priority.aboveNormal + 1);
                    }).then(function () {
                        ui.enableAnimations();
                    });

                    args.setPromise(p);
                }
                $log.debug('WinJS Activated');
            };

            app.onloaded = function (args) {
                $log.debug('WinJS App Loaded');
            };

            app.onready = function (args) {
                $log.debug('WinJS App Ready');
            };

            app.oncheckpoint = function (args) {
                // TODO: This application is about to be suspended. Save any state
                // that needs to persist across suspensions here. You might use the
                // WinJS.Application.sessionState object, which is automatically
                // saved and restored across suspension. If you need to complete an
                // asynchronous operation before your application is suspended, call
                // args.setPromise().
                $log.debug('WinJS Checkpoint');

                // todo: save the state here or delegate to someone else (maybe a service)
                // something like:
                //angularWinjsLocalSettings.values['currentUrl'] = appState.getCurrentUrl();
            };

            app.onunload = function (args) {
                $log.debug('WinJS App Unloaded');
            };

            app.onerror = function (args) {
                $log.debug('WinJS App Error');
            };

            app.onsettings = function (args) {
                $log.debug('WinJS App Settings');
            };

            $log.debug('WinJS App starting...');

            app.start();

            return {started:true}
        });
})();