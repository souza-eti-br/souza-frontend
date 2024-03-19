import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ServerService {
    online = false;
    constructor(private httpClient: HttpClient) {
        this.httpClient.get<Status>("http://localhost:8080/status").subscribe((status: Status) => {
            this.online = status.serverOnline;
        });
    }
}

interface Status {
    name: string;
    serverOnline: boolean;
    databaseOnline: boolean;
}