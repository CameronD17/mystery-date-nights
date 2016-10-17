import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
import { Observable } from "rxjs/Rx";

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);