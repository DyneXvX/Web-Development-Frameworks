import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo: {firstName:string, lastName:string, emailAddress:string, userId:string, password:string} | null = null;
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

}
