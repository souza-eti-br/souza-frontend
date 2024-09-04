import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { GamesComponent } from "./pages/games/games.component";


export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "games", component: GamesComponent },
    { path: "**", redirectTo: "/home", pathMatch: "full"}
];
