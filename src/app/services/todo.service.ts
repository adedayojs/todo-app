import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _rawTodos: Todo[] = [];
  private _todoSubject: BehaviorSubject<Todo[]> = new BehaviorSubject(
    [] as Todo[]
  );
  readonly todos$ = this._todoSubject.asObservable();

  private get _todos(): Todo[] {
    return this._rawTodos.filter((todo) => !todo.isDeleted);
  }

  constructor() {}
  private updateTodoResponse() {
    this._todoSubject.next(this._todos);
  }

  addTodo(todo: Todo) {
    todo.id = this.generateSerialNumber(); // In a real world scenario this would be a unique id
    this._rawTodos.push(todo);
    this.updateTodoResponse();
  }

  removeTodo(id: number) {
    const todo = this._rawTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.isDeleted = true;
    }
    this.updateTodoResponse();
  }

  removeDoneTodo() {
    this._rawTodos.forEach((todo) => {
      if (todo.done) {
        todo.isDeleted = true;
      }
    });
    this.updateTodoResponse();
  }

  markTodoAsDone(id: number) {
    const todo = this._rawTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = true;
    }
    this.updateTodoResponse();
  }

  private generateSerialNumber() {
    return Math.floor(Math.random() * 9999999);
  }
}
