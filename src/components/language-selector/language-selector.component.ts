import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { I18nService } from "../../services/i18n.service";

@Component({
    selector: "ams-language-selector",
    standalone: true,
    imports: [ FormsModule ],
    templateUrl: "./language-selector.component.html",
    styleUrl: "./language-selector.component.css"
})
export class LanguageSelectorComponent {
    constructor(public i18n: I18nService) {}
}