import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, map, of } from 'rxjs';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../../shared/models/task.model';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    CommonModule,
    TaskFormComponent
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {
  task$!: Observable<Task | undefined>;
  isNewTask = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.task$ = this.route.paramMap.pipe(
      switchMap(params => {
        const taskId = params.get('id');
        if (taskId) {
          return this.taskService.getTasks().pipe(
            map(tasks => tasks.find(task => task.id === taskId))
          );
        } else {
          this.isNewTask = true;
          return of(undefined);
        }
      })
    );
    this.cdr.detectChanges();

  }

  onTaskFormSubmit(task: Task): void {
    if (this.isNewTask) {
      task.id = this.generateTaskId();
      this.taskService.addTask(task);
    } else {
      this.taskService.updateTask(task);
    }
    this.router.navigate(['/tasks']);
  }

  private generateTaskId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}