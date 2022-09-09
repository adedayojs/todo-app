import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  form!: FormGroup;
  displayedColumns: string[] = ['name', 'done', 'action'];
  todos$ = this.todoService.todos$;
  todo: Todo[] = [];

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.todos$.subscribe((res) => (this.todo = res));
  }

  addNewTodo(): void {
    if (this.form.invalid) {
      return;
    }

    this.todoService.addTodo(this.form.value);
    this.buildForm();
  }

  updateTodoStatus(todo: Todo): void {
    if (todo.id) this.todoService.markTodoAsDone(todo.id);
  }

  removeTodo(todo: Todo): void {
    if (todo.id) {
      this.todoService.removeTodo(todo.id);
    }
  }

  removeAllDoneTodo() {
    this.todoService.removeDoneTodo();
  }

  /* Form Methods */

  buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      done: [false, [Validators.required]],
    });
  }
}
