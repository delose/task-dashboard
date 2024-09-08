import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Task } from '../../shared/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadInitialTasks();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private loadInitialTasks(): void {
    if (this.isLocalStorageAvailable()) {
      const storedTasks = localStorage.getItem(this.storageKey);
      const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : this.getDefaultTasks();
      this.tasksSubject.next(tasks);
    } else {
      console.warn('LocalStorage is not available. Default tasks will be used.');
      this.tasksSubject.next(this.getDefaultTasks());
    }
  }

  private getDefaultTasks(): Task[] {
    return [
      { id: '1', title: 'First Task', description: 'First task description', status: 'To Do', dueDate: new Date() },
      { id: '2', title: 'Second Task', description: 'Second task description', status: 'In Progress', dueDate: new Date() },
      { id: '3', title: 'Third Task', description: 'Third task description', status: 'Done', dueDate: new Date() },
    ];
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$.pipe(
      switchMap(tasks => {
        if (tasks.length) {
          return of(tasks);
        } else {
          return this.loadTasksFromStorage().pipe(
            catchError(error => {
              console.error('Failed to load tasks:', error);
              return of([]);
            })
          );
        }
      })
    );
  }

  addTask(task: Task): void {
    const tasks = [...this.tasksSubject.value, task];
    this.updateTasks(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.tasksSubject.value.map(task => (task.id === updatedTask.id ? updatedTask : task));
    this.updateTasks(tasks);
  }

  deleteTask(taskId: string): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== taskId);
    this.updateTasks(tasks);
  }

  private updateTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }

  private loadTasksFromStorage(): Observable<Task[]> {
    if (this.isLocalStorageAvailable()) {
      const storedTasks = localStorage.getItem(this.storageKey);
      return of(storedTasks ? JSON.parse(storedTasks) : this.getDefaultTasks());
    } else {
      return of(this.getDefaultTasks());
    }
  }
}