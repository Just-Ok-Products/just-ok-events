import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oscar-night',
  templateUrl: './oscar-night.component.html',
  styleUrls: ['./oscar-night.component.css']
})
export class OscarNightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public nominations: Nomination[] = [
    {nomination: 'il più grosso', names: ['Daniele', 'Nicholas', 'Marte', 'Poseidone', 'Arnold Schwarzenegger']},
    {nomination: 'la persona più pelata della festa', names: ['Il sole', 'Francesco Russo', 'Nicholas', 'Michael Jackson', '']},
    {nomination: 'l\'overengeneering', names: ['Tobia', 'Marino Miculan', 'Elon Musk', 'Nicholas', '']},
    {nomination: 'la persona più rossa dell\'anno', names: ['Una carota', 'Babbo natale', 'Xavier Zentilin', 'Nicholas', '']},
    {nomination: 'la principessa tra le montagne dell\'anno', names: ['Nicholas', 'Alex Turco', 'Heidi', 'Una capra', '']},
    {nomination: 'la persona più stanca dell\'anno', names: ['Lapo Elkann', 'Anna Collauto', 'Nicholas', '', '']},
  ]

}

export interface Nomination {
  names: string[]
  nomination: string
}