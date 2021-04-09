import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIsLoggedIn: boolean = false;
  userName = 'jose';
  password = 'larry';
  @Output() UserStateChange = new EventEmitter<boolean>();
  constructor(private httpC: HttpClient) { }

  Login(userName: string, password: string)
  {
    return this.httpC.get<{token:string}>(`https://unf.josecgomez.dev/Users/${userName}/${password}`);
  }

  CreateUser(userData: {userId:string, firstName:string, lastName:string, emailAddress:string, password:string})
  {
    return this.httpC.post<{firstName: string, lastName: string, emailAddress: string, userId: string, password: string}>('https://unf.josecgomez.dev/Users', userData);    
  }

}



