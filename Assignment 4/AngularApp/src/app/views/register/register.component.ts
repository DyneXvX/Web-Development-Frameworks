import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo: User | null = null;
  message: string = '';
  success: boolean = true;
  constructor(private userSvc: UserService) {
    this.userInfo = new User('','','','',''); 
  }


  ngOnInit(): void {
  }

  CreateUser() {
    if (this.userInfo !== null) {
      this.userSvc.CreateUser(this.userInfo).subscribe((response) => {
        this.success = true;
        this.message = `The User ${response.userId} has been created!`
      }, (er) => {
        this.success = false;
        this.message = er.error.messsage; //this needs to be spelled wrong or it won't work!!                
        console.error(er);
      })
    }
  }

}
