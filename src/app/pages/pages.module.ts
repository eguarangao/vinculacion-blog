import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccesibilidadComponent} from "./accesibilidad/accesibilidad.component";
import {AudioLibrosComponent} from "./audio-libros/audio-libros.component";
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { WordComponent } from './word/word.component';
import { PdfComponent } from './mspdf/pdf.component';



@NgModule({
  declarations: [ AccesibilidadComponent, AudioLibrosComponent,PagesComponent, PowerpointComponent, WordComponent, PdfComponent,],
  exports:[AccesibilidadComponent, AudioLibrosComponent,PagesComponent, PowerpointComponent, WordComponent, PdfComponent,],
  imports: [
    CommonModule,SharedModule,RouterModule
  ]
})
export class PagesModule { }
