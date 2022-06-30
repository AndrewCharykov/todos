import {IDataService} from "./data.service";
import {Todo} from "../todo";
import {HttpService} from "./http.service";
import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BusinessLogicService implements IDataService {
    taskArray: Todo[];

    constructor(private httpService: HttpService) {
        this.taskArray = [];
    }

    addTask(text: string): void {
        this.httpService.addTask(text)
            .subscribe((d: any) =>
                this.taskArray = [...this.taskArray, new Todo(d['title']).setActive(d['status']).setId(d['_id'])])
    }

    changeStatus(task: Todo): void {
        task.setActive(!task.active);
        this.httpService.changeStatus(task)
            .subscribe(() => this.taskArray = [...this.taskArray]);
    }

    clearCompleted(): void {
        this.taskArray
            .filter(todo => !todo.active)
            .forEach(task => this.httpService.delete(task));
    }

    delete(task: Todo): void {
        this.httpService
            .delete(task)
            .subscribe((res: any) => this.taskArray = this.taskArray.filter(todo => todo.id !== res['_id']))
    }

    getTasks(): Observable<Todo[]> {
      return this.httpService.getTasks()
          .pipe(map((data: any) => {
              data.forEach((d: any) => this.taskArray.push(new Todo(d['title']).setActive(d['status']).setId(d['_id'])))
              return this.taskArray;
          }
          ));
    }

}