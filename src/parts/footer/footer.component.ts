import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { I18nService } from "../../services/i18n.service";
import { StatusService } from "../../services/status.service";

@Component({
    selector: "ams-footer",
    standalone: true,
    imports: [ MenubarModule ],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css"
})
export class FooterComponent {
    items = [];
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
                return "color: var(--green-700);";
            } else {
                return "color: var(--yellow-700);";
            }
        } else {
            return "color: var(--red-700);";
        }
    }
    getTooltip(): string {
        if (this.status.isServerOnline()) {
            if (this.status.isDatabaseOnline()) {
                return this.i18n.get("active");
            } else {
                return this.i18n.get("active.no.database");
            }
        } else {
            return this.i18n.get("inactive");;
        }
    }
}
