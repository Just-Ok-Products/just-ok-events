import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EstikapodanniModule } from './Pages/estikapodanni/estikapodanni.module';
import { SnackbarService } from './Pages/Services/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    EstikapodanniModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
