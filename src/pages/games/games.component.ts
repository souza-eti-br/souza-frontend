import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { StatusService } from "../../services/status.service";

@Component({
    templateUrl: "./games.component.html",
    styleUrl: "./games.component.css"
})
export class GamesComponent {
    constructor(private status: StatusService, private router: Router) {
        if (!this.status.isServerOnline()) {
            this.router.navigate(['/home']);
        }
    }
}
