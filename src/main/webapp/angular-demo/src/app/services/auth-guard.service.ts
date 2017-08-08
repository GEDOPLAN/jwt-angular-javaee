import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }


  canActivate(): boolean {
    const allowed = localStorage.getItem('JWT-TOKEN') !== null;

    if (!allowed) {
      this.router.navigateByUrl('notallowed');
    }
    return allowed;
  }
}
