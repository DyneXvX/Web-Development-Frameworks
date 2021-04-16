import { UserService } from './../../services/user.service';
import { PostService } from './../../services/post.service';
import { Post } from 'src/app/models/post.model';
import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  postInfo: Post | null = null;
  message: string = '';
  success: boolean = true;
  currentUser: Token | null = null;
  constructor(private postSvc: PostService, private userSvc: UserService) {  
    let token = userSvc.GetLoggedInUser();      
    if(token != null)
    {
      this.currentUser = token;
    }  
    this.postInfo = new Post(123456789,new Date(),'','',this.currentUser!.UserData.userId,'', new Date())
   }

  ngOnInit(): void {
  }

  CreatePost(){
    if (this.postInfo !== null) {
      this.postSvc.CreatePost(this.postInfo).subscribe((response) => {
        this.success = true;        
        this.message = `The Post ${response.title} has been created!`
      }, (er) => {
        this.success = false;        
        this.message = er.error.messsage; //this needs to be spelled wrong or it won't work!!                
        console.error(er);
        console.log(this.currentUser?.UserData.userId);
      })
    }

  }

}
