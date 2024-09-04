import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
    selector: "ams-header",
    standalone: true,
    imports: [ LanguageSelectorComponent ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
export class HeaderComponent {
    constructor(public i18n: I18nService) {}
}
