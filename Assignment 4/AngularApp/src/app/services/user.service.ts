
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIsLoggedIn: boolean = false;
  @Output() UserStateChange = new EventEmitter<boolean>();
  constructor(private httpC: HttpClient) {

  }

  Login(userName: string, password: string) {
    return this.httpC.get<{ token: string }>(`https://unf.josecgomez.dev/Users/${userName}/${password}`);
  }

  CreateUser(userData: { userId: string, firstName: string, lastName: string, emailAddress: string, password: string }) {
    return this.httpC.post<{ firstName: string, lastName: string, emailAddress: string, userId: string, password: string }>('https://unf.josecgomez.dev/Users', userData);
  }

  SetUserLoggedIn(userToken:{token:string}){
    localStorage.setItem('token', JSON.stringify(userToken));
    this.UserStateChange.emit(true);
  }

  SetUserLoggedOff(userToken:{token:string}){
    localStorage.removeItem('token');
    this.UserStateChange.emit(false);
  }

  GetLoggedInUser(){
    let tokenString = localStorage.getItem('token');
    if(tokenString!==null){
      let tokenObj = JSON.parse(tokenString) as {token:string};
      let tokenInfo = jwt_decode(tokenObj.token);
      return tokenInfo;
    }
    else{
      return null;
    }
    
  }

}



