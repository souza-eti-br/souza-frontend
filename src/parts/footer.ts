import html from "../utils/html";
import I18n from "services/i18n";

export default class Footer {
    main: HTMLDivElement;
    label: HTMLSpanElement;
    constructor() {
        this.main = html.div("footer");
        this.label = html.span();
        this.main.appendChild(this.label);
        this.main.appendChild(html.textNode(": "));
        this.main.appendChild(html.a("footer-link", "_blank", "mailto:alan@souza.eti.br", "Alan Moraes Souza"));
        document.body.appendChild(this.main);
    }
    onLanguageChange() : void {
        this.label.innerHTML = I18n.getMessage("footer-label");
    }
}