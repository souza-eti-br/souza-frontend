import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class I18nService {
    private language = "pt";
    private messages = <{[key: string]: {[key: string]: string}}> {
        pt: {
            "active": "Ativo!",
            "active.no.database": "Ativo, sem banco de dados!",
            "developed.by": "Desenvolvido por",
            "home": "Início",
            "inactive": "Inativo!",
            "server": "Servidor",
            "server.is.offline": "Servidor está desligado!",
            "try.again.later": "Tente de novo mais tarde.",
            "welcome": "Bem-vindo!",
            "welcome-text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)"
        }, es: {
            "active": "¡Activo!",
            "active.no.database": "¡Activo, sin base de datos!",
            "developed.by": "Desarrollado por",
            "home": "Inicio",
            "inactive": "Inactivo!",
            "server": "Servidor",
            "server.is.offline": "El servidor está offline!",
            "try.again.later": "Vuelve a intentarlo más tarde.",
            "welcome": "¡Bienvenidos!",
            "welcome-text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)"
        }, en: {
            "active": "Active!",
            "active.no.database": "Active, no database!",
            "developed.by": "Developed by",
            "home": "Home",
            "inactive": "Inactive!",
            "server": "Server",
            "server.is.offline": "Server is offline!",
            "try.again.later": "Try again later.",
            "welcome": "Welcome!",
            "welcome-text": "This page is for personal use. Below you can access my LinkedIn. :)"
        }
    };
    constructor() {
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
    };
    getLanguage(): string {
        return this.language;
    }
    getLanguageText(): string {
        if (this.language === "en") {
            return "English";
        } else if (this.language === "es") {
            return "Español";
        } else {
            return "Português";
        }
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
        return changed;
    }
    get(key: string): string {
        if (this.language) {
            if (this.messages[this.language]) {
                if (this.messages[this.language][key]) {
                    return this.messages[this.language][key];
                } else {
                    return "### KEY " + key + " HAS NO VALUE FOR LANGUAGE " + this.language + " ###";
                }
            } else {
                return "### LANGUAGE " + this.language + " IS UNDEFINED ###";
            }
        } else {
            return "### LANGUAGE IS UNDEFINED ###";
        }
    }
}