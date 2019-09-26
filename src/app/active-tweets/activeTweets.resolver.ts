import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TweetService} from '../shared/tweet.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ActiveTweetsResolver implements Resolve<any> {
  constructor(private tweetServ: TweetService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.tweetServ.fetchTweets();
  }
}
