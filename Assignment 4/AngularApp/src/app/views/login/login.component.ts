import { Router } from '@angular/router';
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
  constructor(private userSvc: UserService, private router: Router) {
    //let userSrv = new UserService(); <-- Dependency injection replaced.
    this.userAuthInfo = {
      userName: '',
      password: ''
    }
  }


  ngOnInit(): void {
  }

  LoginUser() {
    if (this.userAuthInfo?.userName !== undefined && this.userAuthInfo.password !== undefined) {

      // let result = this.userSvc.Login(this.userAuthInfo?.userName, this.userAuthInfo?.password)
      // if (result) {
      //   this.success = true;
      //   this.message = 'You have been successfully logged in!'
      //   setTimeout(() =>{
      //     this.router.navigate(['/home']);
      //   }, 2000);
        

      // } else {
      //   this.success = false;
      //   this.message = 'Invalid username or password.'
      // }
      let result = this.userSvc.Login(this.userAuthInfo?.userName, this.userAuthInfo?.password).subscribe((response)=>{
        console.log(response.token)
      }, (er)=>{
        this.success = false;
        this.message = er.error.messsage; //keep this wrong.
        console.error(er)
      })

    }

  }


}
