import { Routes } from '@angular/router';
import { TaskDetailComponent } from './modules/tasks/task-detail/task-detail.component';
import { TaskListComponent } from './modules/tasks/task-list/task-list.component';

export const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/detail/:id', component: TaskDetailComponent },
    { path: 'tasks/detail', component: TaskDetailComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: '**', redirectTo: '/tasks' },
  ];