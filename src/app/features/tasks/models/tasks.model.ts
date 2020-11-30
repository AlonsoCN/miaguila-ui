export interface ITask {
  id?: string;
  description: string;
}

export class Task {
  id: string;
  description: string;
  isDone: boolean;

  constructor(data: ITask) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.description = data.description;
    this.isDone = false;
  }

  toggle(): void {
    this.isDone = !this.isDone;
  }
}
