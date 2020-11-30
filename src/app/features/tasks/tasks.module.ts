import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './views/tasks-list.view';
import { TasksRoutingModule } from './tasks.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TasksListComponent],
  imports: [CommonModule, TasksRoutingModule, HttpClientModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TasksModule {}
