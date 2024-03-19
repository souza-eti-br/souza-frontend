import I18n from "../utils/i18n";

export default class Loading {
    main: HTMLDivElement = <HTMLDivElement> document.getElementById("loading-screen-main");
    image: HTMLImageElement = <HTMLImageElement> document.getElementById("loading-screen-image");
    label: HTMLSpanElement = <HTMLSpanElement> document.getElementById("loading-screen-label");
    count = 1;
    constructor(i18n: I18n) {
        i18n.addListener((i18n: I18n) : void => {
            this.image.alt = i18n.getMessage("loading-label");
            this.label.innerHTML = i18n.getMessage("loading-label");
        });
    };
    show(): void {
      if (this.count == 0) {
        this.main.style.display = "block";
      }
      this.count++;
    };
    hide(): void {
      this.count--;
      if (this.count == 0) {
        this.main.style.display = "none";
      }
    }
}