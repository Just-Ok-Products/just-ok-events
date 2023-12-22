import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  private dismiss() {

  }

  public openSnackbar(message: string) {
    this._snackbar.open(message, 'Dismiss', {
      verticalPosition: 'bottom'
    })
  }

  public openTimedSnackbar(message: string) {
    this._snackbar.open(message, undefined, {
      verticalPosition: 'bottom',
      duration: 1500
    })
  }

}
