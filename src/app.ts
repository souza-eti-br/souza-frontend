import Header from "parts/header";
import Footer from "parts/footer";
import I18n from "utils/i18n";

class App {
    i18n: I18n;
    header: Header;
    footer: Footer;
    constructor() {
        this.i18n = new I18n();
        this.header = new Header(this.i18n);
        this.footer = new Footer(this.i18n);
        this.i18n.runListeners();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new App();
});