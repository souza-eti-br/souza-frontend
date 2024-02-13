import html from "../utils/html";
import I18n from "../utils/i18n";

export default class Footer {
    main: HTMLDivElement;
    label: HTMLSpanElement;
    constructor(i18n: I18n) {
        this.main = html.div("footer");
        this.label = html.span();
        i18n.addListener((i18n: I18n) : void => {
            this.label.innerHTML = i18n.getMessage("footer-label");
        });
        this.main.appendChild(this.label);
        this.main.appendChild(html.textNode(": "));
        this.main.appendChild(html.a("footer-link", "_blank", "mailto:alan@souza.eti.br", "Alan Moraes Souza"));
        document.body.appendChild(this.main);
    }
}