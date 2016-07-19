"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
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
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }
    SecondComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "\n    <StackLayout>\n        <Label text=\"Second component\" class=\"title\"></Label>\n        <Button text=\"GO TO FIRST\" [nsRouterLink]=\"['/first']\" class=\"link\"></Button>\n        <ListView [items]=\"myItems\" (itemTap)=\"onItemTap($event)\">\n            <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n                <StackLayout [class.odd]=\"odd\" [class.even]=\"even\">\n                    <Label [text]='\"index: \" + i'></Label>\n                    <Label [text]='\"[\" + item.id +\"] \" + item.name'></Label>\n                </StackLayout>\n            </template>\n        </ListView>\n    </StackLayout>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=pages.js.map