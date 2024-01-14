import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: any[] = [];

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

  deleteTask(task: any) {
    this.taskService.deleteTask(task);
  }
}
