import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {Idata} from "../iface/idata";

@Component({
    selector: 'app-custom-filter',
    templateUrl: './custom-filter.component.html',
    styleUrls: ['./custom-filter.component.less']
})
export class CustomFilterComponent implements OnInit, OnDestroy {
     myReactiveForm: FormGroup = new FormGroup({
        substring: new FormControl('', [Validators.required]),
        active: new FormControl(false)
    });

    destroy$: Subject<any> = new Subject();
    @Output()
    customFilter = new EventEmitter<Idata>();

    ngOnInit(): void {
        this.myReactiveForm.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                this.customFilter.emit(value);
            })    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
