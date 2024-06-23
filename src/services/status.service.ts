import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Constants } from "../types/constants";
import { Status } from "../types/status";

@Injectable({
    providedIn: "root"
})
export class StatusService {
    private serverOnline = false;
    private databaseOnline = false;
    constructor(private http: HttpClient) {
        this.http.get<Status>(Constants.baseRest + "/status").subscribe(
            (data: Status) => {
                this.serverOnline = data.serverOnline;
                this.databaseOnline = data.databaseOnline;
            },
            (error) => console.log("Server is offline!")
        );
    }
    isServerOnline(): boolean {
        return this.serverOnline;
    }
    isDatabaseOnline(): boolean {
        return this.databaseOnline;
    }
}