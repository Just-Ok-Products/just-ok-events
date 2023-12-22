import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/Pages/Services/snackbar.service';

@Component({
  selector: 'app-nomination-card',
  templateUrl: './nomination-card.component.html',
  styleUrls: ['./nomination-card.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class NominationCardComponent implements OnInit {

  @Input() names: string[] = []
  @Input() nomination: string = ''

  public state: string = 'collapsed'
  public voted: boolean = false

  constructor(
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
  }

  switchState() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  sendVote() {
    this.voted = true
    this.snackbar.openTimedSnackbar('Vote registered')
  }

}
