"use strict";
var router_1 = require('nativescript-angular/router');
var pages_1 = require("./pages");
var router_2 = require('@angular/router');
var core_1 = require("@angular/core");
var MultiPageMain = (function () {
    function MultiPageMain() {
    }
    MultiPageMain = __decorate([
        core_1.Component({
            selector: "multi-page-main",
            directives: [router_2.ROUTER_DIRECTIVES, router_1.NS_ROUTER_DIRECTIVES],
            template: "\n    <Label text=\"Multi-page router\"></Label>\n    <page-router-outlet></page-router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MultiPageMain);
    return MultiPageMain;
}());
exports.MultiPageMain = MultiPageMain;
var routes = [
    { path: "", redirectTo: "/first", terminal: true },
    { path: "first", component: pages_1.FirstComponent },
    { path: "second", component: pages_1.SecondComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
exports.MultiPageRouterProviders = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=app.routes.js.map