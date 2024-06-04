const I18n = {
    language: <string> null,
    onChange: <() => void> null,
    messages: <{[key: string]: {[key: string]: string}}> {
        pt: {
            "welcome": "Bem-vindo!",
            "welcome-text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)",
            "footer-label": "Desenvolvido por"
        }, es: {
            "welcome": "Bienvenidos!",
            "welcome-text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)",
            "footer-label": "Desarrollado por"
        }, en: {
            "welcome": "Welcome!",
            "welcome-text": "This page is for personal use. Below you can access my LinkedIn. :)",
            "footer-label": "Developed by"
        }
    },
    setLanguageFromNavigator(): boolean {
        let setted = this.setLanguage(navigator.language);
        if (!setted) {
            for (let language in navigator.languages) {
                setted = this.setLanguage(language);
                if (setted) {
                    break;
                } 
            }
        }
        if (!setted) {
            setted = this.setLanguage("pt");
        }
        return setted;
    },
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
        if (changed && (old !== this.language) && this.onChange != null) {
            this.onChange();
        }
        return changed;
    },
    getMessage(key: string): string {
        if (this.language) {
            return this.messages[this.language][key];
        } else {
            return "### language not setted ###";
        }
    }
}

export default I18n;