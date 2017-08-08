import { AuthGuardService } from './services/auth-guard.service';
import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component'
import { ProtectedComponent } from './pages/protected/protected.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService] },
  { path: 'notallowed', component: NotAllowedComponent }
]

export const APP_PAGES = [
  AppComponent,
  LoginComponent,
  HomeComponent,
  ProtectedComponent,
  NotAllowedComponent
]

