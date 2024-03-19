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
    getRouteClass(path: string) {
        if (this.router.url == ("/" + path)) {
            return "header-link-active";
        } else {
            return "header-link";
        }
    }
}
