import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthInfo: { userName: string, password: string } | null = null;
  message: string = '';
  success: boolean = true;
  constructor(private userSvc: UserService) {
    //let userSrv = new UserService(); <-- Dependency injection
    this.userAuthInfo = {
      userName: '',
      password: ''
    }
  }


  ngOnInit(): void {
  }

  LoginUser() {
    if (this.userAuthInfo?.userName !== undefined && this.userAuthInfo.password !== undefined) {
      let result = this.userSvc.Login(this.userAuthInfo?.userName, this.userAuthInfo?.password)
      if (result) {
        this.success = true;
        this.message = 'You have been successfully logged in!'
      } else {
        this.success = false;
        this.message = 'Invalid username or password.'
      }

    }

  }


}
