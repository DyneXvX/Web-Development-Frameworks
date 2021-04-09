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

  constructor() {
    let token = localStorage.getItem('userIsLoggedIn');    
    if(token != null)
    {
      this.userIsLoggedIn = JSON.parse(token);
    }
   }

  ngOnInit(): void {
  }

  LogOutUser(){
    localStorage.removeItem('userIsLoggedIn');
  }

}
