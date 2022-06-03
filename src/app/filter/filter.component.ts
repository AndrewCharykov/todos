import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from "../services/data.service";
import {Filter} from "../filter";
import {Idata} from "../iface/idata";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent{
  constructor(public data: DataService) {
  }
  customFilter: Idata = {substring: '', active: true};
  filter = Filter;

  @Output()
  f = new EventEmitter<Filter>();

  clear() {
    this.data.clearCompleted()
  }

  click(value : Filter) {
    this.f.emit(value);
  }
}
