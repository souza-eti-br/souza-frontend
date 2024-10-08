import { Component } from "@angular/core";
import { RouterLink } from '@angular/router';
import { I18nService } from "../../services/i18n.service";
import { StatusService } from "../../services/status.service";
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
    selector: "ams-header",
    standalone: true,
    imports: [ RouterLink, LanguageSelectorComponent ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
export class HeaderComponent {
    constructor(public i18n: I18nService, public status: StatusService) {}
}
