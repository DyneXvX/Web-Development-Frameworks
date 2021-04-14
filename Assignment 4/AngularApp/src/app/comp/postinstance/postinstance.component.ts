import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-postinstance',
  templateUrl: './postinstance.component.html',
  styleUrls: ['./postinstance.component.css']
})
export class PostinstanceComponent implements OnInit {  
  
  @Input() postInstance: Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
