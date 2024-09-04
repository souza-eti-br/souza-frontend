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
            "inactive": "Inativo!",
            "page.not.found": "Página não encontrada!",
            "server": "Servidor",
            "welcome": "Bem-vindo!",
            "welcome-text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)"
        }, es: {
            "active": "¡Activo!",
            "active.no.database": "¡Activo, sin base de datos!",
            "developed.by": "Desarrollado por",
            "inactive": "Inactivo!",
            "page.not.found": "¡Página no encontrada!",
            "server": "Servidor",
            "welcome": "¡Bienvenidos!",
            "welcome-text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)"
        }, en: {
            "active": "Active!",
            "active.no.database": "Active, no database!",
            "developed.by": "Developed by",
            "inactive": "Inactive!",
            "page.not.found": "Page not found!",
            "server": "Server",
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