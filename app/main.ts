// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap, bootstrap} from "nativescript-angular/application";
import { APP_ROUTER_PROVIDERS } from "./app.routes";
import {NavigationApp} from './app.component'

//  nativeScriptBootstrap(APP_ROUTER_PROVIDERS);
nativeScriptBootstrap(NavigationApp, [APP_ROUTER_PROVIDERS]);