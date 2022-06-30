import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {FilterComponent} from './filter/filter.component';
import {TodoCountPipe} from './todo-count.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoFilterPipe} from './todo-filter.pipe';
import {DATA_SERVICE} from './services/data.service';
import {CustomFilterComponent} from './custom-filter/custom-filter.component';
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import { LoaderComponent } from './loader/loader.component';
import {BusinessLogicService} from "./services/business.logic.service";

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        TodoItemComponent,
        FilterComponent,
        TodoCountPipe,
        TodoFilterPipe,
        CustomFilterComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
        providers: [{
            provide: DATA_SERVICE,
            useClass: BusinessLogicService
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
