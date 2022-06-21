import {Component, Inject, Input} from '@angular/core';
import {DATA_SERVICE, IDataService} from "../services/data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {

  constructor(@Inject(DATA_SERVICE) public data : IDataService) {
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
