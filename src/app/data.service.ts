import { Todo } from './todo';

export class DataService {
  public taskArray: Todo[] = [];

  addTask(text: string) {
    //todo spread
    this.taskArray = [...this.taskArray, new Todo(text)];
  }

  clearCompleted(){
    this.taskArray =
        this.taskArray.filter(todo => todo.active);
  }

  delete(task: Todo) {
    this.taskArray =
        this.taskArray.filter(todo => todo.id !== task.id);
  }

  changeStatus(task: Todo) {
    task.setActive(!task.active);
    this.taskArray =[...this.taskArray];
  }
}
