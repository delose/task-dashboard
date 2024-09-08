import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { Task } from '../../../shared/models/task.model';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    ScrollingModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor(private taskService: TaskService) {
    this.loadInitialTasks();
  }
  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }
  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }

  private loadInitialTasks(): void {
    const tasks = this.getDefaultTasks();
    this.tasksSubject.next(tasks);
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
          return this.loadTasksFromMemory().pipe(
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
  }

  private loadTasksFromMemory(): Observable<Task[]> {
    // In this case, simply return the current tasks from memory
    return of(this.tasksSubject.value);
  }
}
