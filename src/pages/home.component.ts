import { Component } from "@angular/core";
import { I18nService } from "../services/i18n.service";

@Component({
    selector: "souza-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    constructor(protected i18n: I18nService) {};
}
