import {Todo} from '../todo';
import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";

export const DATA_SERVICE = new InjectionToken<IDataService>('DATA_SERVICE');

export interface IDataService {
  taskArray: Todo[]

  addTask(text: string): void;

  delete(task: Todo): void;

  changeStatus(task: Todo): void;

  clearCompleted(): void;

  getTasks(): Observable<Todo[]>;
}