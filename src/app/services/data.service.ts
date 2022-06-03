import {Todo} from '../todo';

export class DataService {
    taskArray: Todo[];

    constructor() {
        this.taskArray = [];
    }

    addTask(text: string) {
        this.taskArray = [...this.taskArray, new Todo(text)];
    }

    clearCompleted() {
        this.taskArray =
            this.taskArray.filter(todo => todo.active);
    }

    delete(task: Todo) {
        this.taskArray =
            this.taskArray.filter(todo => todo.id !== task.id);
    }

    changeStatus(task: Todo) {
        task.setActive(!task.active);
        this.taskArray = [...this.taskArray];
    }
}
