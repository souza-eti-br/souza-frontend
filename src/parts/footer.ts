import html from "../utils/html";
import i18n from "services/i18n";

export default class Footer extends HTMLDivElement {
    label: HTMLSpanElement;
    constructor() {
        super();
        this.style.position = "absolute";
        this.style.left = "0px";
        this.style.right = "0px";
        this.style.bottom = "0px";
        this.style.height = "14px";
        this.style.padding = "2px";
        this.style.margin = "0px";
        this.style.overflow = "hidden";
        this.style.backgroundColor = "#222222";
        this.style.color = "#E8E8E8";
        this.style.fontSize = "12px";
        this.style.textAlign = "right";
        this.style.whiteSpace = "nowrap";
        this.label = html.span();
        this.appendChild(this.label);
        this.appendChild(html.textNode(": "));
        this.appendChild(html.a("footer-link", "_blank", "mailto:alan@souza.eti.br", "Alan Moraes Souza"));
    }
    applyI18nMessages() : void {
        this.label.innerHTML = i18n.getMessage("footer-label");
    }
}
window.customElements.define('app-footer', Footer, { extends: "div" });