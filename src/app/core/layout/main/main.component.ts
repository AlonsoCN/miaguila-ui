import { Component, OnInit } from '@angular/core';
import { MenuItems } from '@core/constants/menu-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title: string = MenuItems.HOME;

  constructor() {}

  changeTitle(title: string): void {
    this.title = title;
  }
}
