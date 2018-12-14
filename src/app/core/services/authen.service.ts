import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { SystemeConstants } from '../../core/common/systeme.constants';
import 'rxjs/add/operator/map';
import { LoggedInUser } from '../domain/loggedin.user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: Http) { }
  login(username: string, password: string) {
    let body = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: headers });
    return this._http.post(SystemeConstants.BASE_API + '/api/oauth/tokenapi', body, options).map((response: Response) => {
      let user: LoggedInUser = response.json();
      if (user && user.access_token) {
        localStorage.removeItem(SystemeConstants.CURRENT_USER);
        localStorage.setItem(SystemeConstants.CURRENT_USER, JSON.stringify(user));
      }
    });
  }
  logout() {
    localStorage.removeItem(SystemeConstants.CURRENT_USER);
  }

  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemeConstants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    else
      return true;
  }
  getLoggedInUser(): any {
    let user: LoggedInUser;
    if (this.isUserAuthenticated()) {
      var userData = JSON.parse(localStorage.getItem(SystemeConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.username, userData.fullname, userData.email, userData.avatar);
    }
    else
      user = null;
    return user;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = JSON.parse(token);


    if (decoded.expires === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.expires);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === null) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getToken(): string {
    return localStorage.getItem(SystemeConstants.CURRENT_USER);
  }

}
