import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    templateUrl: "./not-found.component.html",
    styleUrl: "./not-found.component.css"
})
export class NotFoundComponent {
    page: string;
    i18n: I18nService;
    constructor(private i18nService: I18nService) {
        this.page = window.location.href;
        this.i18n = i18nService;
    }
}
