import { Component } from '@angular/core';
import { TasksListPresenter } from './views/tasks-list.presenter';

@Component({
  selector: 'app-tasks',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./tasks.component.scss'],
  providers: [TasksListPresenter],
})
export class TasksComponent {
  constructor(public presenter: TasksListPresenter) {}
}
