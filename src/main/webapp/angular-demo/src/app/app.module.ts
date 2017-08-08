import { AuthGuardService } from './services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service'

import { AppComponent } from './app.component';
import { APP_PAGES, APP_ROUTES } from './app.routes';


export const getToken = function() {
  return localStorage.getItem('JWT-TOKEN');
}

@NgModule({
  declarations: [
    AppComponent,
    APP_PAGES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:8080']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
