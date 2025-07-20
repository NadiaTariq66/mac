import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScreeningComponent} from './pages/screening/screening.component';
import {HeaderComponent} from './include/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'serendale-ai';
}
