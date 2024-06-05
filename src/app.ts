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
    onLanguageChange() : void {
        this.header.onLanguageChange();
        this.footer.onLanguageChange();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    i18n.onChange = () => app.onLanguageChange();
    i18n.setLanguageFromNavigator();
});