import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstikapodanniComponent } from './estikapodanni.component';
import { PlanCardComponent } from './Components/plan-card/plan-card.component';

import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { LastDayPopupComponent } from './Components/last-day-popup/last-day-popup.component'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    EstikapodanniComponent,
    PlanCardComponent,
    LastDayPopupComponent
  ]
})
export class EstikapodanniModule { }
