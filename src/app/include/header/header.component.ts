import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu:boolean = false;
  mobileClick(){
    this.showMenu = !this.showMenu;
  }
  menuClose(){
    this.showMenu = false;
  }
}
