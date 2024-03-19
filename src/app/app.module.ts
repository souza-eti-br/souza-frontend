import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [ AppComponent, LoadingComponent, FooterComponent ],
    imports: [ BrowserModule, AppRoutingModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
