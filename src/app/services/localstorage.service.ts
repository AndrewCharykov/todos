import {IDataService} from "./data.service";
import {Todo} from "../todo";

export class LocalstorageService implements IDataService{
    taskArray: Todo[];

    constructor() {
        this.taskArray = [];
        let data = localStorage.getItem('data');
        if (data) {
            JSON.parse(data!)
                .map((x: any) => this.taskArray.push(new Todo(x["_text"]).setActive(!!x["_active"])));
        }
    }

    addTask(text: string) {
        this.taskArray = [...this.taskArray, new Todo(text)];
        this.updateLocalStorage(this.taskArray);
    }

    clearCompleted() {
        this.taskArray =
            this.taskArray.filter(todo => todo.active);
        this.updateLocalStorage(this.taskArray);
    }

    delete(task: Todo) {
        this.taskArray =
            this.taskArray.filter(todo => todo.id !== task.id);
        this.updateLocalStorage(this.taskArray);
    }

   changeStatus(task: Todo) {
        task.setActive(!task.active);
        this.taskArray = [...this.taskArray];
        this.updateLocalStorage(this.taskArray);
    }

    private updateLocalStorage(arr: Todo[]) {
        localStorage.setItem('data', JSON.stringify(arr))
    }
}
