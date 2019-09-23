import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {}
  registerAccount(accountData: {email: string, password: string}) {
    return this.http.post<{message: string, token: string, timeLeft: number}>
    ('http://localhost:3002/api/auth/signup', accountData);
  }

  loginAccount(accountData: {email: string, password: string}) {
    return this.http.post<{message: string, token: string, timeLeft: number}>
    ('http://localhost:3002/api/auth/login', accountData);
  }
}
