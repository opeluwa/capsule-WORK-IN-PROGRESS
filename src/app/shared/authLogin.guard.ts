import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthLoginGuard implements CanActivate{

  constructor(private router: Router, private authServ: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authServ.userSubject.pipe(map(data => {
      return !!data ? this.router.createUrlTree(['/Dashboard']) : true;
    }));
  }
}
