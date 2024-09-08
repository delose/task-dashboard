import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../shared/models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  standalone: true,
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() formSubmit = new EventEmitter<Task>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['To Do', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = { ...this.task, ...this.taskForm.value };
      this.formSubmit.emit(newTask);
    }
  }
}