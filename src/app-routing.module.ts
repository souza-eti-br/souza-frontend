import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home.component";
import { TesteComponent } from "./pages/teste.component";
import { Api01Component } from "./pages/apis/api01.component";
import { Api02Component } from "./pages/apis/api02.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "teste", component: TesteComponent },
    { path: "apis/api01", component: Api01Component },
    { path: "apis/api02", component: Api02Component },
    { path: "**",   redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
