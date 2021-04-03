import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAuth } from '../model/user-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserAuth = null;

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    console.log('token', token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public checkUser(): UserAuth {
    return JSON.parse(sessionStorage.getItem('userAuth'));
  }
}
