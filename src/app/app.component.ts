import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'just-ok-events';

  constructor(
    private router: Router
  ) {}

  public navigateToPage(page: string) {
    this.activeLink = page;
    this.router.navigate(['/', page])
  }

  public mail: string = ''

  public links: string[] = ['event', 'nominations']
  public activeLink: string = 'Event'
}
