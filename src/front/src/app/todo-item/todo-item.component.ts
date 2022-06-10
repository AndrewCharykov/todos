import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent  {

  @Input()
  public text:string = '';

  @Input()
  public active:boolean = true;

  @Output()
  destroy = new EventEmitter<void>();

  @Output()
  status = new EventEmitter<void>();

  delete(): void{
    this.destroy.emit();
  }

  change(): void{
    this.status.emit();
  }
}
