import { Component } from "@angular/core";
import { I18nService } from "../i18n.service"

@Component({
    selector: "souza-header",
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
export class HeaderComponent {
    constructor(protected i18n: I18nService) {}
    onChangeLanguage(event: Event) {
        this.i18n.language = (event.target as HTMLInputElement).value;
    }
}
