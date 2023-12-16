import { SnackbarService } from './../Services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { Plan } from './Models/Plan';

@Component({
  selector: 'app-estikapodanni',
  templateUrl: './estikapodanni.component.html',
  styleUrls: ['./estikapodanni.component.css']
})
export class EstikapodanniComponent implements OnInit {

  private basic: string[] = ['Entrata alla festa', 'Cena e stuzzichini', 'Aperitivo e bevande', 'Musica e intrattenimento'];
  private plus: string[] = this.basic.concat(['Segnalibro della festa', 'Drink di benvenuto esclusivo']);
  private premium: string[] = this.plus.concat(['Accoglienza personalizzata', 'Tartina di benvenuto']);
  private deluxe: string[] = this.premium.concat(['Capellino della festa', 'Accesso alla playlist della serata', 'Vip badge', 'Partenza con 3 punti iniziali', 'Una cartella tombola omaggio']);
  private luxury: string[] = this.deluxe.concat(['Parcheggio riservato', 'Drink "a comando"', 'Ulteriori 2 punti iniziali']);


  public plans: Plan[] = [
    {name: 'Basic', price: 12, percs: this.basic, color: '#3066BE'},
    {name: 'Plus', price: 13, percs: this.plus, color: '#84DCCF'},
    {name: 'Premium', price: 14, percs: this.premium, color: '#A6D9F7'},
    {name: 'Deluxe', price: 15, percs: this.deluxe, color: '#BCCCE0'},
    {name: 'Luxury', price: 17, percs: this.luxury, color: '#BF98A0'}
  ];

  constructor(
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.snackbarService.openSnackbar('Termine delle prenotazioni il giorno 26 Dicembre')
  }

}
