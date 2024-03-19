import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class I18nService {
    language: string = "pt";
    messages: {[key: string]: {[key: string]: string}} = {
        pt: {
            "developed.by": "Desenvolvido por",
            "loading": "Carregando",
            "welcome": "Bem-vindo!",
            "welcome-text": "Está página é para uso pessoal. Abaixo você pode acessar meu LinkedIn. :)"
        }, es: {
            "developed.by": "Desarrollado por",
            "loading": "Cargando",
            "welcome": "Bienvenidos!",
            "welcome-text": "Esta página es para uso personal. A continuación puedes acceder a mi LinkedIn. :)"
        }, en: {
            "developed.by": "Developed by",
            "loading": "Loading",
            "welcome": "Welcome!",
            "welcome-text": "This page is for personal use. Below you can access my LinkedIn. :)"
        }
    }
    constructor() { }
    get(key: string) {
        return this.messages[this.language][key];
    }
}
