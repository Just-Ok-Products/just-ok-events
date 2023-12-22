import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OscarNightComponent } from './oscar-night.component';
import { NominationCardComponent } from './Components/nomination-card/nomination-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [
    OscarNightComponent,
    NominationCardComponent
  ]
})
export class OscarNightModule { }
