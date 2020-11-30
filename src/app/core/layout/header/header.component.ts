import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '@shared/services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string;
  pendingTasks: Observable<number>;

  constructor(private tasksService: TasksService) {
    this.pendingTasks = this.tasksService.numberUndoTasks$;
  }
}
