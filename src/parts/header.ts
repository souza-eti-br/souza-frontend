import html from "../utils/html";
import i18n from "services/i18n";
import HeaderLogo from "components/header-logo";

export default class Header {
    main: HTMLDivElement;
    select: HTMLSelectElement;
    constructor() {
        this.main = html.div("header");
        this.main.id = "header";
        this.main.appendChild(new HeaderLogo());
        this.select = html.select("i18n-selector", (value: string) => {
            i18n.setLanguage(value);
        });
        this.select.add(html.option("English", "en"));
        this.select.add(html.option("Español", "es"));
        this.select.add(html.option("Português", "pt"));
        this.main.appendChild(this.select);
        document.body.appendChild(this.main);
    }
    applyI18nMessages() : void {
        this.select.value = i18n.language;
    }
}