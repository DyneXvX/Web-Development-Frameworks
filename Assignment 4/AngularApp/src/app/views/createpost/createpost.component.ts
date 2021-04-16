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
  postArray: [] = [];
  message: string = '';
  success: boolean = true;
  currentUser: Token | null = null;
  constructor(private postSvc: PostService, private userSvc: UserService) {  
    let token = userSvc.GetLoggedInUser();
    let postArray = postSvc.GetPost();
    //let lastPost = postArray[postArray -1]; <-- Doesn't work
    if(token != null)
    {
      this.currentUser = token;
    }  
    this.postInfo = new Post(0,new Date(),'','',this.currentUser!.UserData.userId,'', new Date())
   }

  ngOnInit(): void {
  }

  CreatePost(){
    if(this.postInfo !== null)
    {
       this.postSvc.CreatePost(this.postInfo).subscribe((response)=> {
        this.success = true;
        this.message = `The post ${response.title} has been created.`
       }, (er)=> {
       this.success = false;
       this.message = er.error.messsage;
       console.error(er);
       });
    }

  }

}
