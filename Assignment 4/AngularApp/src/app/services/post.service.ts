import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpC: HttpClient) {}

  GetPost(){
    return this.httpC.get<Post[]>(`${environment.BASE_URL}/Posts`)    
  }

  CreatePost(postData: Post){
    return this.httpC.post<Post>(`${environment.BASE_URL}/Posts`, postData)
  }

  EditPost(postId: string, postData: Post){
    return this.httpC.patch<Post>(`${environment.BASE_URL}/Posts/${postId}`, postData)
  }

  DeletePost(postId: string){
    return this.httpC.delete<Post>(`${environment.BASE_URL}/Posts/${postId}`)
  }
}
