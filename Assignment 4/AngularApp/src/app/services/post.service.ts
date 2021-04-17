import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpC: HttpClient, private userSvc:UserService) {}

  GetPost(){

    return this.httpC.get<Post[]>(`${environment.BASE_URL}/Posts`)
  }

  CreatePost(postData: Post){
    const currentuserToken = this.userSvc.GetLoggedInUserToken();
    return this.httpC.post<Post>(`${environment.BASE_URL}/Posts`, postData, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentuserToken}`)})
  }

  EditPost(postId: string, postData: Post){
    return this.httpC.patch<Post>(`${environment.BASE_URL}/Posts/${postId}`, postData)
  }

  DeletePost(postId: string){
    return this.httpC.delete<Post>(`${environment.BASE_URL}/Posts/${postId}`)
  }
}
