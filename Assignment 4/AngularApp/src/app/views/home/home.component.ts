import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Token|null = null;

  constructor(private userSvc: UserService) {
    let token = this.userSvc.GetLoggedInUser();  
    if(token != null){      
      this.currentUser = token;
    }
   }

  ngOnInit(): void {
  }

}
