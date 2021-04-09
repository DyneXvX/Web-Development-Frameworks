import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIsLoggedIn: boolean = false;
  userName = 'jose';
  password = 'larry';
  @Output() UserStateChange = new EventEmitter<boolean>();
  constructor() { }

  Login(userName: string, password: string)
  {
    if(this.userName === userName && this.password === password)
    {
      this.userIsLoggedIn = true;
      localStorage.setItem('userIsLoggedIn', JSON.stringify(this.userIsLoggedIn))
      this.UserStateChange.emit(this.userIsLoggedIn);
      return true;
    }else{
      this.userIsLoggedIn = false;
      localStorage.setItem('userIsLoggedIn', JSON.stringify(this.userIsLoggedIn))     
      this.UserStateChange.emit(!this.userIsLoggedIn);
      return false;
    }
  }

}
