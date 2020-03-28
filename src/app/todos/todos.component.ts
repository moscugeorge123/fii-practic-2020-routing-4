import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IToDo, ToDoType } from './models';
import { ToDoService } from './services/todo.service';

@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class ToDosComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public toDosType: ToDoType = 'all';
  public todos: IToDo[] = [];

  private subscription: Subscription;

  constructor(private toDoService: ToDoService) { }

  public ngOnInit(): void {
    this.getTodos();

    this.subscription = this.toDoService.isLoading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getTodos(selectedType: ToDoType = 'all'): void {
    this.toDosType = selectedType;

    this.toDoService.getTodos(selectedType)
      .subscribe((todos: IToDo[]) => {
        this.todos = todos;
      });
  }
}
