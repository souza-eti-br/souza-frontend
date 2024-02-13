import html from "../utils/html";
import I18n from "../utils/i18n";

export default class Header {
    main: HTMLDivElement;
    constructor(i18n: I18n) {
        this.main = html.div("header");
        this.main.id = "header";
        this.main.appendChild(html.img("header-logo", "Souza.eti.br", "images/favicon.png"));
        let select = html.select("i18n-selector", (value: string) => {
            i18n.setLanguage(value);
        });
        select.add(html.option("English", "en"));
        select.add(html.option("Español", "es"));
        select.add(html.option("Português", "pt"));
        select.value = i18n.language;
        this.main.appendChild(select);
        document.body.appendChild(this.main);
    }
}