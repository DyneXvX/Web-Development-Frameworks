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

  @Input() postInstance: Post | undefined;
  currentUser:Token|null=null;
  constructor(private userSvc:UserService, private postSvc:PostService) {
    this.currentUser = this.userSvc.GetLoggedInUser();

   }

  ngOnInit(): void {
  }

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
