import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksService } from './services/tasks.service';

@NgModule({
  imports: [CommonModule],
  providers: [TasksService],
})
export class SharedModule {}
