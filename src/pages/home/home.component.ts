import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export class HomeComponent {
    constructor(public i18n: I18nService) {}
}
