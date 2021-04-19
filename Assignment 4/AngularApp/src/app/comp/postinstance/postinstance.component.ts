import { PostService } from './../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/models/post.model';
import { Token } from 'src/app/models/token.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-postinstance',
  templateUrl: './postinstance.component.html',
  styleUrls: ['./postinstance.component.css']
})
export class PostinstanceComponent implements OnInit {

  postInfo: Post | null = null;
  message: string = '';
  success: boolean = true;
  currentUser: Token | null = null;  

  @Input() postInstance: Post | undefined;
  
  constructor(private userSvc:UserService, private postSvc:PostService) {
    this.currentUser = this.userSvc.GetLoggedInUser();

   }

  ngOnInit(): void {
  }

  // DeletePost(postInfo: Post){
  //   if (this.postInfo !== null) {
  //     this.postSvc.DeletePost(postInfo.postId).subscribe((response) => {
  //       this.success = true;        
  //       this.message = `The Post ${response.title} has been deleted!`
  //     }, (er) => {
  //       this.success = false;        
  //       this.message = er.error.messsage; //this needs to be spelled wrong or it won't work!!                
  //       console.error(er);        
  //     })
  //   }

  // }

  public IsCurrentUserOwner()
  {
    if(this.currentUser==null)
      return false;
    else if(this.postInstance==null)
      return false;
    else if(this.currentUser.sub===this.postInstance.userId)
      return true;
    else
      return false ;
  }

}
