"use strict";
var core_1 = require('@angular/core');
var application_1 = require('nativescript-angular/application');
var router_1 = require('@angular/router');
var router_2 = require('nativescript-angular/router');
var app_routes_1 = require("./app.routes");
var NavigationApp = (function () {
    // >> (hide)
    function NavigationApp(router) {
        this.router = router;
    }
    NavigationApp = __decorate([
        core_1.Component({
            selector: 'navigation-test',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.NS_ROUTER_DIRECTIVES],
            template: "\n        <StackLayout>\n            <StackLayout class=\"nav\">\n                <Button text=\"First\" \n                    [nsRouterLink]=\"['/first']\"></Button>\n                <Button text=\"Second\"\n                    [nsRouterLink]=\"['/second']\"></Button>\n            </StackLayout>\n            \n            <router-outlet></router-outlet>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavigationApp);
    return NavigationApp;
}());
exports.NavigationApp = NavigationApp;
// >> (hide)
function start_snippet() {
    // << (hide)
    application_1.nativeScriptBootstrap(NavigationApp, [app_routes_1.APP_ROUTER_PROVIDERS]);
    // >> (hide)
}
//# sourceMappingURL=app.component.js.map