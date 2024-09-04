import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "ams-main",
    standalone: true,
    imports: [ RouterOutlet ],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.css"
})
export class MainComponent {
}
