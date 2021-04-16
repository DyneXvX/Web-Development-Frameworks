import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {faSignInAlt, faUserPlus, faSignOutAlt, faBookOpen, faPlaceOfWorship} from '@fortawesome/free-solid-svg-icons'
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signInIcon = faSignInAlt;
  registerIcon = faUserPlus;
  signOutIcon = faSignOutAlt;
  bookOpenIcon = faBookOpen;
  placeOfWorshipIcon = faPlaceOfWorship;
  userIsLoggedIn = false;
  currentUser: Token|null = null;

  constructor(private userSvc: UserService, private router: Router) {
    let token = this.userSvc.GetLoggedInUser();  
    if(token != null)
    {
      this.userIsLoggedIn = true;
      this.currentUser = token;
    }
    this.userSvc.UserStateChange.subscribe((userLoggedInMsg) =>{
      this.currentUser = token;
      this.userIsLoggedIn = userLoggedInMsg;
    })


   }

  ngOnInit(): void {
  }

  LogOutUser(){
    this.userSvc.SetUserLoggedOff();
    this.userIsLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
