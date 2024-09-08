import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-field',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './nav-field.component.html',
  styleUrl: './nav-field.component.css'
})
export class NavFieldComponent implements OnInit {
  public routes: { path: string, label: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routes = this.router.config
      .filter((route: Route) => route.path && !route.path.includes(':') && route.path !== '**')
      .map((route: Route) => ({
        path: `/${route.path ?? ''}`,
        label: (route.path ?? '').charAt(0).toUpperCase() + (route.path ?? '').slice(1).replace(/-/g, ' ')
      }));  }
}