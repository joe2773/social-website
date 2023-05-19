import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postApiUrl = environment.baseApiUrl + 'api/posts';

  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    throw error;
  }

  getPosts(): Observable<Post | any> {
    return this.http.get(this.postApiUrl).pipe(
      catchError(this.handleError)
    );
  }
  getPost(postId : number): Observable<Post | any> {
    return this.http.get(this.postApiUrl+'/'+postId).pipe(
      catchError(this.handleError)
    );
  }

  createPost(postData: any): Observable<Post | any> {
    return this.http.post(this.postApiUrl, postData).pipe(
      catchError(this.handleError)
    );
  }

  updatePost(postId: number, postData: any): Observable<Post | any> {
    const url = `${this.postApiUrl}/${postId}`;
    return this.http.put(url, postData).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(postId: number): Observable<Post | any> {
    const url = `${this.postApiUrl}/${postId}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
}
