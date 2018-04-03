import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService, public router:Router) {

  }

  status(): boolean {
    return localStorage.getItem('JWT-TOKEN') !== null;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("login");
  }
}
