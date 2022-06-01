import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'todoCount'
})
export class TodoCountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value == 1){
      return value + " item left"
    }
    return value + " items left";
  }
}
