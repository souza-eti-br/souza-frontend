import html from "../utils/html";
import I18n from "services/i18n";

export default class Header {
    main: HTMLDivElement;
    select: HTMLSelectElement;
    constructor() {
        this.main = html.div("header");
        this.main.id = "header";
        this.main.appendChild(html.img("header-logo", "Souza.eti.br", "images/favicon.png"));
        this.select = html.select("i18n-selector", (value: string) => {
            I18n.setLanguage(value);
        });
        this.select.add(html.option("English", "en"));
        this.select.add(html.option("Español", "es"));
        this.select.add(html.option("Português", "pt"));
        this.main.appendChild(this.select);
        document.body.appendChild(this.main);
    }
    onLanguageChange() : void {
        this.select.value = I18n.language;
    }
}