import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TweetModel} from './tweet.model';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {FetechedTweetsInterface} from './fetechedTweets.interface';

const BACKEND_URL_LOGIN = environment.HttpApi + '/auth/login';
const BACKEND_URL_SIGNUP = environment.HttpApi + '/auth/signup';
const BACKEND_URL_NEW_TWEET = environment.HttpApi + '/tweets/newTweet';
const BACKEND_URL_FETCHTWEET= environment.HttpApi + '/tweets/getTweets';
@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {}
  registerAccount(accountData: {email: string, password: string}) {
    return this.http.post<{message: string, token: string, timeLeft: number}>
    (BACKEND_URL_SIGNUP, accountData);
  }

  loginAccount(accountData: {email: string, password: string}) {
    return this.http.post<{message: string, token: string, timeLeft: number}>
    (BACKEND_URL_LOGIN, accountData);
  }

  createNewTweet(tweet: TweetModel) {
    return this.http.post(BACKEND_URL_NEW_TWEET, tweet).subscribe(data => {});
  }

  gatherTweets() {
    return this.http.get<FetechedTweetsInterface>(BACKEND_URL_FETCHTWEET).pipe(tap(data => {
      console.log(data);
    }));
  }
}
