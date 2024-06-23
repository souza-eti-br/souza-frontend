import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { I18nService } from "../../services/i18n.service";
//import { StatusService } from "../../services/status.service";

@Component({
    selector: "ams-footer",
    standalone: true,
    imports: [MenubarModule],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css"
})
export class FooterComponent {
    items = [];
    i18n: I18nService;
    constructor(private i18nService: I18nService) {
        this.i18n = i18nService;
    }
}
