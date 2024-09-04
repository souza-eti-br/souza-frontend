import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { I18nService } from "../../services/i18n.service";
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
    selector: "ams-header",
    standalone: true,
    imports: [ MenubarModule, LanguageSelectorComponent ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
export class HeaderComponent {
    items = [{
        label: this.i18n.get("home"),
        icon: "pi pi-fw pi-home",
        routerLink: "homee"
    }];
    constructor(public i18n: I18nService) {}
}
