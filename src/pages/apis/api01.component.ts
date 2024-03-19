import { Component } from "@angular/core";
import { I18nService } from "../../services/i18n.service";

@Component({
    selector: "souza-apis-api01",
    templateUrl: "./api01.component.html"
})
export class Api01Component {
    constructor(protected i18n: I18nService) {};
}
