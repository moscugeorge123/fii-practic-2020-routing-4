import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay, filter, map, tap } from 'rxjs/operators';

import { IToDo, ToDoType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private readonly api: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public getTodos(selectedType: ToDoType): Observable<IToDo[]> {
    this.isLoading$.next(true);
    return this.http.get<IToDo[]>(this.api)
      .pipe(
        delay(1000),
        filter((todos: IToDo[]) => todos && !!todos.length),
        tap(() => this.isLoading$.next(false)),
        map((todos: IToDo[]) => {
          if (selectedType === 'done') {
            return todos.filter(todo => todo.completed);
          }

          if (selectedType === 'uncomplete') {
            return todos.filter(todo => !todo.completed);
          }

          return todos;
        })
      );
  }
}