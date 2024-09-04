import { Component } from "@angular/core";
import { HeaderComponent } from "./parts/header/header.component";
import { MainComponent } from "./parts/main/main.component";
import { FooterComponent } from "./parts/footer/footer.component";

@Component({
    selector: "ams-app",
    standalone: true,
    imports: [ HeaderComponent, MainComponent, FooterComponent ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent {
}
