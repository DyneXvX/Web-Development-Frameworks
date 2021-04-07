import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo: {firstName:string, lastName:string, emailAddress:string, userId:string, password:string} | null = null;
  message: string = '';
  success: boolean = true;
  constructor() { 
    this.userInfo = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      userId: '',
      password: '',
    };
  }


  ngOnInit(): void {
  }

  changeAlert(){
    this.success = true;
    this.message = 'All is good'
  }

}
