import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";
import { StatusService } from "../../services/status.service";

@Component({
    selector: "ams-footer",
    standalone: true,
    imports: [],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css"
})
export class FooterComponent {
    constructor(public i18n: I18nService, private status: StatusService) {}
    getIcon(): string {
        if (this.status.isServerOnline()) {
            if (this.status.isDatabaseOnline()) {
                return "bi bi-database-check";
            } else {
                return "bi bi-database-exclamation";
            }
        } else {
            return "bi bi-database-x";
        }
    }
    getColor(): string {
        if (this.status.isServerOnline()) {
            if (this.status.isDatabaseOnline()) {
                return "color: #33CC33;";
            } else {
                return "color: #CCCC33;";
            }
        } else {
            return "color: #CC3333;";
        }
    }
}
