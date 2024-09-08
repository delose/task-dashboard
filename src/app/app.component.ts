import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavFieldComponent } from './shared/components/nav-field/nav-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavFieldComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmaster-dashboard';
}
