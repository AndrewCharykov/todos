import {Todo} from '../todo';
import {InjectionToken} from "@angular/core";

export const DATA_SERVICE = new InjectionToken<IDataService>('DATA_SERVICE');

export interface IDataService {
  taskArray: Todo[]

  addTask(text: string): void;

  delete(task: Todo): void;

  changeStatus(task: Todo): void;

  clearCompleted(): void;

  //TODO добавить еще один метод получения списка данных
}