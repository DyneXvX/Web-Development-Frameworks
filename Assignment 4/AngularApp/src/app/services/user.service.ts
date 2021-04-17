import { User } from './../models/user.model';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIsLoggedIn: boolean = false;
  @Output() UserStateChange = new EventEmitter<boolean>();
  constructor(private httpC: HttpClient) {

  }

  Login(userName: string, password: string) {
    return this.httpC.get<{ token: string }>(`${environment.BASE_URL}/Users/${userName}/${password}`);
  }

  CreateUser(userData: User) {
    return this.httpC.post<User>(`${environment.BASE_URL}/Users`, userData);
  }

  SetUserLoggedIn(userToken: { token: string }) {
    localStorage.setItem('token', JSON.stringify(userToken));
    this.UserStateChange.emit(true);
  }

  SetUserLoggedOff() {
    localStorage.removeItem('token');
    this.UserStateChange.emit(false);
  }

  GetLoggedInUser() {
    let tokenString = localStorage.getItem('token');
    if (tokenString !== null) {
      let tokenObj = JSON.parse(tokenString) as { token: string };
      let tokenInfo = <Token>jwt_decode(tokenObj.token);
      return tokenInfo;
    }
    else {
      return null;
    }

  }

  GetLoggedInUserToken()
  {
    let tokenString = localStorage.getItem('token');
    if (tokenString !== null) {
      let tokenObj = JSON.parse(tokenString) as { token: string };
      return tokenObj.token;
    }
    else {
      return null;
    }
  }

}



