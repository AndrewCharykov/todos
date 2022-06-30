import {IDataService} from "./data.service";
import {Todo} from "../todo";
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HttpService  {
    baseURL: string = "http://localhost:5000/api/";

    constructor(private http: HttpClient) {
    }

    /**
     * Валидно ли возвращать Observable<any>?
     * @param text
     */
    addTask(text: string): Observable<any> {
       return  this.http.post(
            this.baseURL + 'tasks',
            {title: text, status: true});
    }

    /**
     * Валидно ли возвращать Observable<any>?
     * @param task
     */
    changeStatus(task: Todo): Observable<any> {
        return this.http.put(
            this.baseURL + 'tasks',
            {_id: task.id,title: task.text ,status:task.active})
    }

    /**
     * Валидно ли возвращать Observable<any>?
     * @param task
     */
    delete(task: Todo): Observable<any> {
       return this.http.delete(this.baseURL + 'tasks/' + task.id);
    }

    getTasks(): Observable<any> {
        return this.http.get(this.baseURL + 'tasks');
    }

    getTask(task: Todo): Observable<Todo> {
        return this.http.get(this.baseURL + 'tasks' + task.id)
            .pipe(map((d: any) => {
                return new Todo(d['title']).setActive(d['status']).setId(d['_id'])
            }))
    }
}