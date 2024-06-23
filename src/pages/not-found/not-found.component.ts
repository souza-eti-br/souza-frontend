import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    templateUrl: "./not-found.component.html",
    styleUrl: "./not-found.component.css"
})
export class NotFoundComponent {
    page: string;
    constructor(public i18n: I18nService) {
        this.page = window.location.href;
    }
}
