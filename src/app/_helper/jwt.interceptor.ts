import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../_services/authentification.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authentificationService: AuthentificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authentificationService.currentUtilisateurValue;
    // if (currentUser && currentUser.token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.token}`
    //     }
    //   });
    // }
    console.log('rrrrrrrrrrrrrrrrrrrrrr');
    return next.handle(request);
  }
}
