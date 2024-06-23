import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { Language } from "../../types/language";
import { I18nService } from "../../services/i18n.service";

@Component({
    selector: "ams-language-selector",
    standalone: true,
    imports: [DropdownModule, FormsModule],
    templateUrl: "./language-selector.component.html",
    styleUrl: "./language-selector.component.css"
})
export class LanguageSelectorComponent {
    items: Language[];
    selectedItem: string;
    i18n: I18nService;
    constructor(private i18nService: I18nService) {
        this.items = [
            {name: "English", code: "en"},
            {name: "Español", code: "es"},
            {name: "Português", code: "pt"}
        ];
        this.selectedItem = i18nService.getLanguage();
        this.i18n = i18nService;
    }
    onChange(): void {
        this.i18n.setLanguage(this.selectedItem);
    }
}