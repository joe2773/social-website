import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient) {}
    login(username: string, password: string): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams()
        .set('username', username)
        .set('password', password);
      return this.http.post<any>(environment.baseApiUrl +'/authentication', { headers: headers, params: params, withCredentials : true });
    }
}
