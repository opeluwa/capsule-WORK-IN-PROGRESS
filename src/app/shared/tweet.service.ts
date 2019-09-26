import {Injectable} from '@angular/core';
import {TweetModel} from './tweet.model';
import {BehaviorSubject} from 'rxjs';
import {HttpService} from './http.service';
import {tap} from 'rxjs/operators';
import {FetechedTweetsInterface} from './fetechedTweets.interface';

@Injectable({providedIn: 'root'})
export class TweetService {
  scheduledTweets: TweetModel[] = [];
  scheduledTweetsSubject = new BehaviorSubject<TweetModel[]>(null);

  constructor(private httpServ: HttpService) {}


   newScheduleTweet(newTweet: any) {
    const constructedScheduled: TweetModel = this.tweetModelConstructor((newTweet));
    this.httpServ.createNewTweet(constructedScheduled);
    console.log(constructedScheduled);
  }

  tweetModelConstructor(newTweet): TweetModel {
    return new TweetModel(newTweet.tweetBody, newTweet.scheduleType,
      {number: newTweet.reminders.number, unit: newTweet.reminders.unit}, newTweet.setDate,
      {directMessage: newTweet.tweetType.Dm, public: newTweet.tweetType.public},
      newTweet.userNames, null);
  }

  getItem(index: number): TweetModel {
    return this.scheduledTweets.slice(index, index + 1)[0];
  }

  fetchTweets() {
    return this.httpServ.gatherTweets().pipe(tap((data: FetechedTweetsInterface) => {
      data.Posts.map(item => {
        const scheduleTweet = new TweetModel(item.TweetBody, item.scheduleType, item.Reminder,
                              item.setDate, item.tweetType, item.userNames, item._id);
        this.scheduledTweets.push(scheduleTweet);
      });
      this.scheduledTweetsSubject.next(this.scheduledTweets);
    }));
  }
}
