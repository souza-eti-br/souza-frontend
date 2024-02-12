import {Menu} from "parts/menu";
import {I18n} from "utils/i18n";

(new Menu()).print();
let i18n = new I18n();
i18n.addListener((i18n: I18n) : void => {
    console.log("teste");
});
i18n.addListener((i18n: I18n) : void => {
    console.log(i18n.getMessage("welcome"));
    console.log(i18n.getMessage("welcome-text"));
    console.log(i18n.getMessage("footer-label"));
    console.log(i18n.getMessage("new"));
});
i18n.setLanguage("es");
i18n.setLanguage("pt");