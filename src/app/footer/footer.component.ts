import { Component } from "@angular/core";
import { I18nService } from "../i18n.service"

@Component({
    selector: "souza-footer",
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css"
})
export class FooterComponent {
    constructor(protected i18n: I18nService) {};
}
