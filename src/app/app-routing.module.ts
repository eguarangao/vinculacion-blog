import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotpagefoundComponent} from "./notpagefount/notpagefound.component";
import {PagesRoutingModule} from "./pages/pages.routing";

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'**', component:NotpagefoundComponent},
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
