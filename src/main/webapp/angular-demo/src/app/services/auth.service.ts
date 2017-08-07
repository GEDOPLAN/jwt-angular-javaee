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
        .post('http://localhost:8080/angular-jwt-1.0-SNAPSHOT/rest/login', { username, password })
        .subscribe( resp => {
          localStorage.setItem('JWT-TOKEN', 'dfdf');
          resolve(true);
        }, error => reject(error));
    });
  }
}
