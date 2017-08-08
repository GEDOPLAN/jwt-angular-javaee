import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.authService.login(username, password).then(
      r => {
        this.message = null;
        this.router.navigateByUrl('');
      },
      e => {
        this.message = 'Login nicht erfolgreich';
      }
    )
  }

}
