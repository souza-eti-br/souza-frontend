import { Component } from "@angular/core";
import { I18nService } from "../services/i18n.service";

@Component({
    selector: "souza-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    constructor(protected i18n: I18nService) {}
    onChangeLanguage(event: Event) {
        this.i18n.language = (event.target as HTMLInputElement).value;
    }
}
