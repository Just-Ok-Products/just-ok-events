import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstikapodanniComponent } from './Pages/estikapodanni/estikapodanni.component';

const routes: Routes = [
  {path: 'estikapodanni', component: EstikapodanniComponent},
  {path: '**', redirectTo: 'estikapodanni'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
