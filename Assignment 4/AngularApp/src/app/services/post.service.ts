import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  @Input('currentPost') postInstance: Post | undefined;

  constructor(private httpC: HttpClient, private userSvc:UserService) {}
  
  GetPost(){

    return this.httpC.get<Post[]>(`${environment.BASE_URL}/Posts`)
  }

  CreatePost(postData: Post){
    const currentUserToken = this.userSvc.GetLoggedInUserToken();
    return this.httpC.post<Post>(`${environment.BASE_URL}/Posts`, postData, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`)})
  }

  EditPost(postData: Post){
    const currentUserToken = this.userSvc.GetLoggedInUserToken();
    return this.httpC.patch<Post>(`${environment.BASE_URL}/Posts/${postData.postId}`, postData, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`)})
  }

  DeletePost(postData: Post){
    const currentUserToken = this.userSvc.GetLoggedInUserToken();
    return this.httpC.delete<Post>(`${environment.BASE_URL}/Posts/${postData.postId}`,{headers: new HttpHeaders().set('Authorization', `Bearer ${currentUserToken}`)})
  }
}
