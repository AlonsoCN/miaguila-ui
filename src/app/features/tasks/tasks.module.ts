import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks.routing';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './views/tasks-list.view';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TasksComponent, TasksListComponent],
  imports: [CommonModule, TasksRoutingModule, HttpClientModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TasksModule {}
