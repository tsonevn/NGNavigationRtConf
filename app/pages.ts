import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {APP_ROUTER_PROVIDERS} from "./app.routes"

@Component({
    selector: "first",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="First component" class="title"></Label>
        <Button text="GO TO SECOND" [nsRouterLink]="['/second']" class="link"></Button>
    </StackLayout>`
})
export class FirstComponent { }

@Component({
    selector: "second",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="Second component" class="title"></Label>
        <Button text="GO TO FIRST" [nsRouterLink]="['/first']" class="link"></Button>
    </StackLayout>`
})
export class SecondComponent { }