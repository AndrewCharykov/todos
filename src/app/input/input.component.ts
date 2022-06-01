import {Component, Input} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {

  constructor(private data: DataService) {
  }

  @Input()
  public placeholder: string = "";

  @Input()
  public inputClass: string = "";

  fill(ev: any): void {
    this.data.addTask(ev.target.value);
    ev.target.value = "";
  }
}
