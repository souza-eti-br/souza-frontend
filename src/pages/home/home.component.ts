import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export class HomeComponent {
    i18n: I18nService;
    constructor(private i18nService: I18nService) {
        this.i18n = i18nService;
    }
}
