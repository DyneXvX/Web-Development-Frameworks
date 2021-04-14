import { PostService } from './../../services/post.service';
import { Post } from './../../models/post.model';
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
  postArray: Post[] = [];
  constructor(private userSvc: UserService, private postSvc: PostService) {
    let token = this.userSvc.GetLoggedInUser();  
    if(token != null){      
      this.currentUser = token;      
    }
    this.postSvc.GetPost().subscribe((postArray) =>{
      this.postArray = postArray    
    }, (ex)=>{
      console.log(ex);
    });
  }



  ngOnInit(): void {
  }

}
