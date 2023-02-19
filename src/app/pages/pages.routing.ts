import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {AccesibilidadComponent} from "./accesibilidad/accesibilidad.component";
import {AudioLibrosComponent} from "./audio-libros/audio-libros.component";
import {PowerpointComponent} from "./powerpoint/powerpoint.component";
import {WordComponent} from "./word/word.component";
import {PdfComponent} from "./mspdf/pdf.component";
const  routes: Routes =[
  {
    path:'accesibilidad',
    component:PagesComponent,
    children:[
      {path:'',component:AccesibilidadComponent},
      {path:'audiolibros',component:AudioLibrosComponent},
      {path:'powerpoint',component:PowerpointComponent},
      {path:'word',component:WordComponent},
      {path:'pdf',component:PdfComponent},
    ]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule{}
