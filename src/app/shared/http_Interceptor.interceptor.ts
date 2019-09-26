import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';

@Injectable()
export class Http_InterceptorInterceptor implements HttpInterceptor {
  constructor(private authServ: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const moddedRequest = req.clone({headers: req.headers.set('authorization', 'Bearer ' + this.authServ.token)});
    return next.handle(moddedRequest);
  }
}
