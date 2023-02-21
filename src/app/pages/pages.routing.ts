import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {AccesibilidadComponent} from "./accesibilidad/accesibilidad.component";
import {AudioLibrosComponent} from "./audio-libros/audio-libros.component";
import {PowerpointComponent} from "./powerpoint/powerpoint.component";
import {WordComponent} from "./word/word.component";
import {PdfComponent} from "./mspdf/pdf.component";
import {InicioComponent} from "./inicio/inicio.component";
const  routes: Routes =[
  {
    path:'inicio',
    component:PagesComponent,
    children:[
      {path:'',component:InicioComponent},
      {path:'audiolibros',component:AudioLibrosComponent},
      {path:'powerpoint',component:PowerpointComponent},
      {path:'word',component:WordComponent},
      {path:'pdf',component:PdfComponent},
      {path:'accesibilidad',component:AccesibilidadComponent},
    ]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule{}
