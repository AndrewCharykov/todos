import {Pipe, PipeTransform} from '@angular/core';
import {Filter} from './filter';
import {Todo} from './todo';
import {CustomFilter} from "./custom-filter";
import {Idata} from "./iface/idata";

@Pipe({
    name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {
   //todo логику допилить
    transform(value: Todo[], filter: Filter, customFilter: Idata): Todo[] {
        switch (filter) {
            case Filter.ALL:
                return value;
            case Filter.ACTIVE:
                return value.filter(todo => todo.active);
            case Filter.COMPLETED:
                return value.filter(todo => !todo.active);
            case Filter.CUSTOM:
                return value.filter(todo => todo.active === !customFilter.active)
                    .filter(t => t.text.includes(customFilter.substring ?? ""));
            default:
                return value;
        }
    }
}
