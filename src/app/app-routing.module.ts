import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// modulos
import { AuthRoutingModule } from './auth/auth.rounting';
import { PagesRoutingModule } from './pages/pages.rounting';
// componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  { path: ''         , redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**'       , component: NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
