import { PostService } from './../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  
  @Input() postInstance: Post | undefined;
  
  postInfo: Post | null = null;
  message: string = '';
  success: boolean = true;
  currentUser: Token | null = null;
    constructor(private postSvc: PostService) { 

     
  }

  ngOnInit(): void {
  }

  EditPost(){    
    if (this.postInfo !== null) {
      this.postSvc.EditPost(this.postInfo).subscribe((response) => {
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
