import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, User } from '../models/users.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { sortUsersAlphabetically } from '@shared/utils/array.helper';

@Injectable()
export class UserListPresenter {
  users: Array<IUser>;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    const url = 'https://api.mocki.io/v1/1c595a08';
    return this.http.get<IUser[]>(url).pipe(
      map((users: IUser[]) => {
        users.sort(sortUsersAlphabetically('firstname'));
        return users.map((u) => new User(u));
      })
    );
  }

  setUsers(users: Array<IUser | User>): void {
    this.users = users;
  }
}
