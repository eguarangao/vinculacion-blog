import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any[]=[
  {
    titulo:'Accesibilidad',
    icono: 'mdi mdi-gauge',
    submenu:[
      {titulo:'Accesibilidad', url:'/'},
      {titulo:'PowerPoint', url:'powerpoint'},
      {titulo:'Word', url:'word'},
      {titulo:'Pdf', url:'pdf'},
    ]

  }
];
  constructor() { }
}
