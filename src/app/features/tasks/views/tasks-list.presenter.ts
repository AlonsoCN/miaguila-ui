import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TasksService } from '@shared/services/tasks.service';
import { ITask, Task } from '../models/tasks.model';

@Injectable()
export class TasksListPresenter {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  addTask(taskDescription: string): void {
    this.tasksService
      .add({ description: taskDescription })
      .then((task: Task) => {
        this.tasks.push(task);
      });
  }

  deleteTask(taskToBeDeleted: ITask): void {
    this.tasksService
      .delete(taskToBeDeleted)
      .then((indexTaskDeleted: number) => {
        this.tasks.splice(indexTaskDeleted, 1);
      });
  }

  toggleTask(task: Task): void {
    this.tasksService.toggle(task).then((wasTaskToggled: boolean) => {
      if (wasTaskToggled) {
        console.log('Tarea actualizada.');
      }
    });
  }
}
