import { Component } from '@angular/core';
import { TasksListPresenter } from './tasks-list.presenter';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.view.html',
  styleUrls: ['./tasks-list.view.scss'],
  providers: [TasksListPresenter],
})
export class TasksListComponent {
  public newTaskDescription: string;
  constructor(public presenter: TasksListPresenter) {}

  addTask(): void {
    if (this.newTaskDescription) {
      this.presenter.addTask(this.newTaskDescription);
      this.newTaskDescription = '';
    }
  }
}
