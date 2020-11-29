import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.view.html',
  styleUrls: ['./users-list.view.scss'],
})
export class UsersListComponent {
  constructor() {
    console.log('UsersList Component init');
  }
}
