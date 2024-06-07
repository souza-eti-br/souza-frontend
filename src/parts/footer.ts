import html from "../utils/html";
import i18n from "services/i18n";

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
    applyI18nMessages() : void {
        this.label.innerHTML = i18n.getMessage("footer-label");
    }
}