import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./pages/pages.module";

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefount/notpagefound.component';



@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
