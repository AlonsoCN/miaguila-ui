import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './views/tasks-list.view';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: TasksComponent,
    children: [{ path: 'list', component: TasksListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
