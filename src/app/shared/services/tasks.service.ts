import { Injectable } from '@angular/core';
import { Task, ITask } from '@features/tasks/models/tasks.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = []; // Database simulation
  private numberUndoTasks: BehaviorSubject<number> = new BehaviorSubject(0);
  numberUndoTasks$ = this.numberUndoTasks.asObservable();

  get(): Promise<Task[]> {
    return new Promise((resolve) => resolve(this.tasks));
  }

  add(newTask: ITask): Promise<Task> {
    return new Promise((resolve) => {
      const task = new Task(newTask);
      this.tasks.push(task);
      this.notifyNumberUndoTasks();
      resolve(task);
    });
  }

  delete(taskSelected: ITask): Promise<number> {
    return new Promise((resolve) => {
      const index = this.tasks.findIndex((task) => task.id === taskSelected.id);
      this.tasks.splice(index, 1);
      this.notifyNumberUndoTasks();
      resolve(index);
    });
  }

  deleteCompleted(): Promise<Task[]> {
    return new Promise((resolve) => {
      this.tasks = this.tasks.filter((todo) => !todo.isDone);
      this.notifyNumberUndoTasks();
      resolve(this.tasks);
    });
  }

  toggle(taskSelected: ITask): Promise<boolean> {
    return new Promise((resolve) => {
      const index = this.tasks.findIndex((task) => task.id === taskSelected.id);
      this.tasks[index].toggle();
      this.notifyNumberUndoTasks();
      resolve(!!index);
    });
  }

  private notifyNumberUndoTasks(): void {
    const undoneTasks = this.tasks.filter((task) => !task.isDone);
    this.numberUndoTasks.next(undoneTasks.length);
  }
}
