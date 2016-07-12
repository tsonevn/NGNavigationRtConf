"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var FirstComponent = (function () {
    function FirstComponent() {
    }
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "\n    <StackLayout>\n        <Label text=\"First component\" class=\"title\"></Label>\n        <Button text=\"GO TO SECOND\" [nsRouterLink]=\"['/second']\" class=\"link\"></Button>\n    </StackLayout>"
        }), 
        __metadata('design:paramtypes', [])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
var SecondComponent = (function () {
    function SecondComponent() {
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "\n    <StackLayout>\n        <Label text=\"Second component\" class=\"title\"></Label>\n        <Button text=\"GO TO FIRST\" [nsRouterLink]=\"['/first']\" class=\"link\"></Button>\n    </StackLayout>"
        }), 
        __metadata('design:paramtypes', [])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=pages.js.map