import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { stringify } from '../../node_modules/@angular/core/src/util';


@Injectable()
export class DataService {

    private baseUrl = 'http://localhost:8080'
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    runService(courseName: object) {
        console.log(courseName)
        this.http.post(this.baseUrl + '/saveCourse', JSON.stringify(courseName), this.options)
            .subscribe(result => {
                return result.json()
            });
    }

    selectAll() {
        return this.http.get(this.baseUrl + '/findCourses', this.options)
           // .subscribe(result => {
             //   console.log(result)
            //    return result.json()
           // });
    }



}