import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { StatusService } from "./status.service";

@Injectable({
    providedIn: "root"
})
export class SecurityService implements CanActivate {
    constructor(private statusService: StatusService, private router: Router) {}
    canActivate(): boolean {
        if (this.statusService.isServerOnline()) {
            return true;
        } else {
            this.router.navigate(['/server-offline']);
            return false;
        }
    }
}