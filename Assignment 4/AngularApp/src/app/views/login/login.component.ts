import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private userSvc: UserService, private router: Router, private route:ActivatedRoute) {
    //let userSrv = new UserService(); <-- Dependency injection replaced.
    this.userAuthInfo = {userName: '', password: ''};
    if (this.route.snapshot.paramMap.get('msg') != null){
      this.message = this.route.snapshot.paramMap.get('msg')as string;
    }
  }


  ngOnInit(): void {
  }

  LoginUser() {
    if (this.userAuthInfo?.userName !== undefined && this.userAuthInfo.password !== undefined) {
      let result = this.userSvc.Login(this.userAuthInfo?.userName, this.userAuthInfo?.password).subscribe((response)=>{
        console.log(response.token);
        this.userSvc.SetUserLoggedIn(response);
        this.router.navigate(['/sanctum'])
      }, (er)=>{
        this.success = false;
        this.message = er.error.messsage; //keep this wrong.        
      })

    }

  }


}
