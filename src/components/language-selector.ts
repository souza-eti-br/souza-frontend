import i18n from "services/i18n";

export default class LanguageSelector extends HTMLSelectElement {
    constructor() {
        super();
        this.style.float = "right";
        this.style.margin = "2px";
        this.style.padding = "5px 4px";
        this.style.border = "#000000 thin solid";
        this.style.backgroundColor = "#333333";
        this.style.color = "#DDDDDD";
        this.addOption("English", "en");
        this.addOption("Español", "es");
        this.addOption("Português", "pt");
        this.addEventListener("change", () => {
            i18n.setLanguage(this.value);
        });
    }
    private addOption(text: string, value: string): void {
        let option = document.createElement("option");
        option.text = text;
        option.value = value;
        this.add(option);
    }
}
window.customElements.define('language-selector', LanguageSelector, { extends: "select" });