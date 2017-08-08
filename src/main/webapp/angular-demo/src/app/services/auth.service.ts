import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:8080/angular-jwt-1.0-SNAPSHOT/rest/login', { username, password }, { responseType: 'text' })
        .subscribe((resp: string) => {
          localStorage.setItem('JWT-TOKEN', resp);
          resolve(true);
        }, error => reject);
    });
  }

  logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/angular-jwt-1.0-SNAPSHOT/rest/logout', {})
        .subscribe(r => {
          localStorage.removeItem('JWT-TOKEN');
        })
    });

  }
}
