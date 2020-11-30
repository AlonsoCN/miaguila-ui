import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from '@core/constants/menu-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems = MenuItems;
  @Output() navigate = new EventEmitter();

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.navigate.emit(MenuItems.HOME);
    this.router.navigate(['/home']);
  }

  navigateToUsers(): void {
    this.navigate.emit(MenuItems.USERS);
    this.router.navigate(['/users']);
  }

  navigateToTasks(): void {
    this.navigate.emit(MenuItems.TASKS);
    this.router.navigate(['/tasks']);
  }
}
