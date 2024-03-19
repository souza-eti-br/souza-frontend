import { Component } from "@angular/core";
import { I18nService } from "../services/i18n.service";

@Component({
    selector: "souza-teste",
    templateUrl: "./teste.component.html"
})
export class TesteComponent {
    constructor(protected i18n: I18nService) {};
}
