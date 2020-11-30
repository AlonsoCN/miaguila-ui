import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './views/users-list.view';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
