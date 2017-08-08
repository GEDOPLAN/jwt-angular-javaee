import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService) {

  }

  status(): boolean {
    return localStorage.getItem('JWT-TOKEN') !== null;
  }

  logout() {
    this.auth.logout();
  }
}
