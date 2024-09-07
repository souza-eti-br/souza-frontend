import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    templateUrl: "./server-offline.component.html",
    styleUrl: "./server-offline.component.css"
})
export class ServerOfflineComponent {
    constructor(public i18n: I18nService) {}
}
