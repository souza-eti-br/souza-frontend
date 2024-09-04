import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HttpClientModule } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        importProvidersFrom(HttpClientModule),
        provideRouter(routes),
        provideAnimationsAsync(),
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
};
