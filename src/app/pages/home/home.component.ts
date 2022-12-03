import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  items: any[] = [
    { title: 'Play', route: 'https://www.playvalorant.com' },
    { title: 'Agentes', route: '/agents' },
    { title: 'Arsenal', route: '/arsenal' },
  ];

  navigate(item: any) {
    if (item.title == 'Play') window.location.href = item.route;

    this.router.navigate([item.route]);
  }
}
