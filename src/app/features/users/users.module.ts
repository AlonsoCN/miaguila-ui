import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './views/users-list.view';

@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {
  constructor() {
    console.log('User Module');
  }
}
