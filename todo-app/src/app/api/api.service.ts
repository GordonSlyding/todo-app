import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Fix import statement

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SERVER_URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.SERVER_URL);
  }

  getTasks(): Observable<any> {
    return this.http.get(this.SERVER_URL);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.SERVER_URL, task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.patch(`${this.SERVER_URL}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    console.log('deleteTask', id, `${this.SERVER_URL}/${id}`);
    return this.http.delete(`${this.SERVER_URL}/${id}`);
  }
}
