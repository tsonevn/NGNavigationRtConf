import {nsProvideRouter, NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {FirstComponent, SecondComponent} from "./pages";
import {ROUTER_DIRECTIVES, Router, RouterConfig } from '@angular/router';
import {Component, ElementRef} from "@angular/core";


@Component({
    selector: "multi-page-main",
    directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
    template: `
    <Label text="Multi-page router"></Label>
    <page-router-outlet></page-router-outlet>
    `

})
export class MultiPageMain {
    constructor() {
    }
}

const routes: RouterConfig = [
    { path: "", redirectTo: "/first", terminal: true },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent },
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, { enableTracing: false })
];
export const MultiPageRouterProviders = [
    nsProvideRouter(routes, { enableTracing: false })
];