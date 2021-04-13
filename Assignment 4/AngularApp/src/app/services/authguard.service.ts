import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private userSvc:UserService, private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userInfo = this.userSvc.GetLoggedInUser();
    console.log(userInfo);
    if (userInfo===null){
      this.router.navigate(['/login']);
      return false;
    }else{      
      return true;
    }
  }
}
