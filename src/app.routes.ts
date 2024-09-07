import { Routes } from "@angular/router";
import { SecurityService } from './services/security.service';
import { HomeComponent } from "./pages/home/home.component";
import { GamesComponent } from "./pages/games/games.component";
import { ServerOfflineComponent } from "./pages/server-offline/server-offline.component";


export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "games", component: GamesComponent, canActivate: [SecurityService] },
    { path: "server-offline", component: ServerOfflineComponent },
    { path: "**", redirectTo: "/home", pathMatch: "full"}
];
