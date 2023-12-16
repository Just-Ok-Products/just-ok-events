import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  @Input() name: string | undefined;
  @Input() price: number | undefined;
  @Input() percs: string[] | undefined;
  @Input() color: string | undefined;

}
