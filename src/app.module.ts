import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from "./parts/loading.component";
import { FooterComponent } from "./parts/footer.component";
import { HeaderComponent } from "./parts/header.component";

@NgModule({
    declarations: [ AppComponent, LoadingComponent, FooterComponent, HeaderComponent ],
    imports: [ BrowserModule, HttpClientModule, AppRoutingModule, BsDropdownModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot() ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
