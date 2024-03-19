import { Component } from "@angular/core";
import { I18nService } from "../services/i18n.service";
import { ServerService } from "../services/server.service";

@Component({
    selector: "souza-footer",
    templateUrl: "./footer.component.html"
})
export class FooterComponent {
    constructor(protected i18n: I18nService, protected server: ServerService) {}
}
