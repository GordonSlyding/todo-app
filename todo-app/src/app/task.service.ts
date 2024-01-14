import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: any[] = []; // Declare and initialize the 'tasks' property

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // the ngOnInit() method is used to initialize the component

    this.apiService.getTasks().subscribe((data: any[]) => {
      // Subscribe to the getTasks() method from the ApiService
      this.tasks = data; // Assign the response to the 'tasks' property
    });
  }

  onTaskChange(task: any) {
    task.completed = !task.completed;
    this.apiService.updateTask(task.id, task).subscribe({
      next: () => {
        // Handle successful update
      },
      error: (err: any) => {
        console.error('Error updating task', err);
      },
    });
  }

  deleteTask(task: any) {
    this.apiService.deleteTask(task.id).subscribe(() => {
      // After the task is deleted from the server, remove it from the tasks array
      const index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    });
  }

  newTask: string = ''; // Declare the 'newTask' property

  createTask(task: string) {
    if (task) {
      // Only create a task if the input field is not empty
      this.apiService.createTask(task).subscribe((newTask: any) => {
        this.tasks.push(newTask);
        // After the task is created on the server, clear the input field
        console.log('newTask:!!!', newTask);
        this.newTask = ''; // Assign an empty string to 'newTask'
      });
    }
  }
}
