import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserListPresenter } from './users-list.presenter';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.view.html',
  styleUrls: ['./users-list.view.scss'],
  providers: [UserListPresenter],
})
export class UsersListComponent implements OnInit {
  constructor(public presenter: UserListPresenter) {}

  ngOnInit(): void {
    this.presenter.getUsers().subscribe((users: User[]) => {
      this.presenter.setUsers(users);
    });
  }
}
