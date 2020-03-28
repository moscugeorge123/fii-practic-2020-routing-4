import { Pipe } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'numberOfTodos'
})
export class NumberOfTodosPipe {
  @memo()
  transform(value: number): string {
    if (!value) {
      return 'no todos';
    }

    if (value === 1) {
      return 'one todo';
    }

    return `${value} todos`;
  }
}
