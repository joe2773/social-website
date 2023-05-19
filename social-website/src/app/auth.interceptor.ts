// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, switchMap } from 'rxjs/operators';
// import { AuthService } from './services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return this.authService.login('admin','password').pipe(
//       switchMap(() => {
//         const modifiedRequest = request.clone({ withCredentials: true });
//         return next.handle(modifiedRequest);
//       }),
//       catchError(error => {
//         // Handle invalid cookie error, e.g., redirect to login page, show error message
//         console.error('Cookie validation failed:', error);
//         return throwError(error);
//       })
//     );
//   }
// }
