import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }

  getHello(): Observable<any> {
    return this.http.get('http://localhost:8080/angular-jwt-1.0-SNAPSHOT/rest/demo');
  }
}
