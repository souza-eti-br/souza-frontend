export default class I18n {
    language: string = "pt";
    listeners: { (it8n: I18n): void; }[] = [];
    messages: {[key: string]: {[key: string]: string}} = {
        pt: {
            "footer-label": "Desenvolvido por",
            "loading-label": "Carregando",
            "welcome": "Bem-vindo!",
            "welcome-text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)"
        }, es: {
            "footer-label": "Desarrollado por",
            "loading-label": "Cargando",
            "welcome": "Bienvenidos!",
            "welcome-text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)"
        }, en: {
            "footer-label": "Developed by",
            "loading-label": "Loading",
            "welcome": "Welcome!",
            "welcome-text": "This page is for personal use. Below you can access my LinkedIn. :)"
        }
    }
    constructor() {
        if (!this.setLanguage(navigator.language)) {
            let found = false;
            for (let language in navigator.languages) {
                if (this.setLanguage(language)) {
                    found = true;
                    break;
                } 
            }
            if (!found) {
                this.language = "pt";
            }
        }
        this.messages["pt"]["new"] = "novo";
        this.messages["es"]["new"] = "nuevo";
        this.messages["en"]["new"] = "new";
    }
    setLanguage(language: string): boolean {
        let old = this.language;
        let changed = false;
        if (language) {
            if (language.startsWith("pt")) {
                this.language = "pt";
                changed = true;
            } else if (language.startsWith("es")) {
                this.language = "es";
                changed = true;
            } else if (language.startsWith("en")) {
                this.language = "en";
                changed = true;
            }
        }
        if (changed && (old !== this.language)) {
            this.runListeners();
        }
        return changed;
    }
    addListener(listener: { (it8n: I18n): void; }): void {
        this.listeners.push(listener);
    }
    getMessage(key: string): string {
        return this.messages[this.language][key];
    }
    runListeners(): void {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i](this);
        }
    }
}