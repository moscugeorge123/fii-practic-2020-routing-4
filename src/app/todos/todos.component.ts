import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IToDo, ToDoType } from './models';
import { ToDoService } from './services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class ToDosComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public toDosType: ToDoType = 'all';
  public todos: IToDo[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private toDoService: ToDoService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.subscription.add(
      this.toDoService.isLoading$.subscribe((loading: boolean) => {
        this.isLoading = loading;
      })
    );

    this.subscription.add(
      this.route.params.subscribe((params) => {
        console.log(params.todoType);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getTodoFromRouting(todo: ToDoType = 'all') {
    this.getTodos(todo);
  }

  public getTodos(selectedType: ToDoType = 'all'): void {
    this.toDosType = selectedType;

    this.toDoService.getTodos(selectedType)
      .subscribe((todos: IToDo[]) => {
        this.todos = todos;
      });
  }
}
