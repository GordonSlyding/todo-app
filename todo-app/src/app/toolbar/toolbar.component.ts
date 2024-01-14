import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  tasks: any[] = [];
  newTask: string = '';
  constructor(
    private apiService: ApiService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
    this.taskService.ngOnInit();
  }

  onTaskChange(task: any) {
    this.taskService.onTaskChange(task);
  }

  createTask(task: string) {
    this.taskService.createTask(task);
  }
}
