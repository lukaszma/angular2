System.register(['angular2/platform/browser', './app.component', './config.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, config_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [config_service_1.Config]);
        }
    }
});
//# sourceMappingURL=boot.js.map