import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {faSignInAlt, faUserPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signInIcon = faSignInAlt;
  registerIcon = faUserPlus;
  signOutIcon = faSignOutAlt;
  userIsLoggedIn = false;

  constructor(private userSvc: UserService, private router: Router) {
    let token = localStorage.getItem('userIsLoggedIn');    
    if(token != null)
    {
      this.userIsLoggedIn = JSON.parse(token);
    }
    this.userSvc.UserStateChange.subscribe((userLoggedInMsg) =>{
      this.userIsLoggedIn = userLoggedInMsg;
    })

   }

  ngOnInit(): void {
  }

  LogOutUser(){
    localStorage.removeItem('userIsLoggedIn');
    this.userIsLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
