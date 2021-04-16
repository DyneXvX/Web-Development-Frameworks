import { PostService } from './../../services/post.service';
import { Post } from 'src/app/models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  postInfo: Post | null = null;
  message: string = '';
  success: boolean = true;
  constructor(private postSvc: PostService) {
    //this.postInfo = new Post;
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
