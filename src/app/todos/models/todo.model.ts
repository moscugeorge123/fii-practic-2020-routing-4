export type ToDoType = 'all' | 'done' | 'uncomplete';

export interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
