import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthInfo: {userName:string, password:string} | null = null;
  message: string = '';
  success: boolean = true;
  constructor() { 
    this.userAuthInfo = {
      userName:'',
      password:''
    }
  }
  

  ngOnInit(): void {
  }

  LoginUser(){

  }


}
