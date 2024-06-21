export default class HeaderLogo extends HTMLImageElement {
    constructor() {
        super();
        this.style.float = "left";
        this.style.height = "25px";
        this.style.width = "25px";
        this.style.marginLeft = "4px";
        this.style.marginRight = "10px";
        this.style.marginTop = "4px";
        this.style.cursor = "pointer";
        this.alt = "Souza.eti.br";
        this.src = "images/favicon.png";
        this.addEventListener("click", () => {
            window.location.href = "";
        });
    }
}
window.customElements.define('header-logo', HeaderLogo, { extends: "img" });