import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {BehaviorSubject} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

interface userInterface {
  email: string;
  token: string;
  TimeExpired: number;
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  tokenTimer: any;
  token: string;
  userSubject = new BehaviorSubject<userInterface>(null);
  constructor(private httpServ: HttpService, private router: Router) {}

  registerAccount(accountData: {email: string, password: string}) {
    return this.httpServ.registerAccount(accountData).pipe(take(1), tap(data => {
      this.userInit(data, accountData.email);
    }));
  }

  login(accountData: {email: string, password: string}) {
    return this.httpServ.loginAccount(accountData).pipe(take(1), tap(data => {
      this.userInit(data, accountData.email);
    }));
  }

  logout() {

      localStorage.clear();
      window.location.reload();

  }

  autoLogin() {
    const localData: userInterface = JSON.parse(localStorage.getItem('user'));
    if (localData) {
      if (localData.TimeExpired - new Date().getTime() > 0) {
        this.userSubject.next(localData);
        this.token = localData.token;
        this.loginTimer(localData.TimeExpired);
      } else {
        this.logout();
      }
    }
  }

  storeLocally(userData: userInterface) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  expirationTimeSetUp(timer: number) {
    const expTimer = new Date().getTime() + timer;
    this.loginTimer(expTimer);
    return expTimer;
  }

  loginTimer(timer: number) {
    const timeLeft = timer - new Date().getTime();
    this.tokenTimer = setTimeout(() => {
      localStorage.clear();
      window.location.reload();
    }, timeLeft);
  }

  userInit(data: {message: string, token: string, timeLeft: number}, email: string) {
    const expTime = this.expirationTimeSetUp(data.timeLeft);
    this.token = data.token;
    const userData: userInterface = {
      email,
      token: data.token,
      TimeExpired: expTime
    };
    this.storeLocally(userData);
    this.userSubject.next(userData);
  }
}
