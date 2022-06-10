import {Component, Inject} from '@angular/core';
import {DATA_SERVICE, IDataService} from "./services/data.service";
import {Todo} from "./todo";
import {Filter} from "./filter";
import {Idata} from "./iface/idata";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'todos';
    filter!: Filter;
    f = Filter;
    customFilter: Idata = {substring: '', active: true};

    constructor(@Inject(DATA_SERVICE) public data : IDataService) {

    }

    delete(task: Todo) {
        this.data.delete(task);
    }

     change(task: Todo) {
        this.data.changeStatus(task);
    }

    changeFilter(filter: Filter) {
        this.filter = filter;
    }

    setCustomFilter(cf: Idata) {
        return this.customFilter = cf;
    }
}
