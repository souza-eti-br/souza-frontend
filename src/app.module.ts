import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from "./parts/loading.component";
import { FooterComponent } from "./parts/footer.component";
import { HeaderComponent } from "./parts/header.component";

@NgModule({
    declarations: [ AppComponent, LoadingComponent, FooterComponent, HeaderComponent ],
    imports: [ BrowserModule, AppRoutingModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
