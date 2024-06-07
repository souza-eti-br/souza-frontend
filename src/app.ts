import Header from "parts/header";
import Footer from "parts/footer";
import i18n from "services/i18n";

class App {
    header: Header;
    footer: Footer;
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }
    applyI18nMessages() : void {
        this.header.applyI18nMessages();
        this.footer.applyI18nMessages();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    i18n.onChange = () => app.applyI18nMessages();
    i18n.setLanguageFromNavigator();
});