// src/app/models/task.model.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  dueDate: Date;
}