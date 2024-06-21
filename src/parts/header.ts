import i18n from "services/i18n";
import HeaderLogo from "components/header-logo";
import LanguageSelector from "components/language-selector";

export default class Header extends HTMLDivElement {
    select: LanguageSelector;
    constructor() {
        super();
        this.style.position = "absolute";
        this.style.top = "0px";
        this.style.left = "0px";
        this.style.right = "0px";
        this.style.height = "33px";
        this.style.padding = "5px";
        this.style.overflow = "hidden";
        this.style.backgroundColor = "#222222";
        this.select = new LanguageSelector();
        this.appendChild(new HeaderLogo());
        this.appendChild(this.select);
    }
    applyI18nMessages() : void {
        this.select.value = i18n.language;
    }
}
window.customElements.define('app-header', Header, { extends: "div" });