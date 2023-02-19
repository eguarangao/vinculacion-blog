import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SiderbarComponent} from "./siderbar/siderbar.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [    HeaderComponent,
    SiderbarComponent,],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[    HeaderComponent,
    SiderbarComponent,]
})
export class SharedModule { }
