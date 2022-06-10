import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {FilterComponent} from './filter/filter.component';
import {TodoCountPipe} from './todo-count.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoFilterPipe} from './todo-filter.pipe';
import {DataService} from './data.service';
import {CustomFilterComponent} from './custom-filter/custom-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        TodoItemComponent,
        FilterComponent,
        TodoCountPipe,
        TodoFilterPipe,
        CustomFilterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}