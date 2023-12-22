import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstikapodanniComponent } from './Pages/estikapodanni/estikapodanni.component';
import { OscarNightComponent } from './Pages/oscar-night/oscar-night.component';

const routes: Routes = [
  {path: 'event', component: EstikapodanniComponent},
  {path: 'nominations', component: OscarNightComponent},
  {path: '**', redirectTo: 'event'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
