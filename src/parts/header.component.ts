import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { I18nService } from "../services/i18n.service";

@Component({
    selector: "souza-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    constructor(protected i18n: I18nService, protected router: Router) {}
    onChangeLanguage(event: Event) {
        this.i18n.language = (event.target as HTMLInputElement).value;
    }
    isRoute(path: string) {
        return (this.router.url == ("/" + path));
    }
    isRouteStartsWith(path: string) {
        return (this.router.url.startsWith("/" + path));
    }
    getLanguage() {
        if (this.i18n.language == "en") {
            return "English";
        } else if (this.i18n.language == "es") {
            return "Español";
        } else {
            return "Português";
        }
    }
}
