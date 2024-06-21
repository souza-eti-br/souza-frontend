import html from "../utils/html";
import i18n from "services/i18n";
import HeaderLogo from "components/header-logo";
import LanguageSelector from "components/language-selector";

export default class Header {
    main: HTMLDivElement;
    select: LanguageSelector;
    constructor() {
        this.main = html.div("header");
        this.main.id = "header";
        this.select = new LanguageSelector();
        this.main.appendChild(new HeaderLogo());
        this.main.appendChild(this.select);
        document.body.appendChild(this.main);
    }
    applyI18nMessages() : void {
        this.select.value = i18n.language;
    }
}