import { Component } from "@angular/core";
import { I18nService } from "../i18n.service"

@Component({
    selector: "souza-loading",
    templateUrl: "./loading.component.html",
    styleUrl: "./loading.component.css"
})
export class LoadingComponent {
    count = 0;
    constructor(protected i18n: I18nService) {};
    show() {
        this.count = this.count + 1;
    };
    hide() {
        this.count = this.count - 1;
    };
}
