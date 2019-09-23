import {Injectable} from '@angular/core';
import {TweetModel} from './tweet.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TweetService {
  scheduledTweets: TweetModel[];
  scheduledTweetsSubject = new BehaviorSubject<TweetModel>(null);

  constructor() {}


  static newScheduleTweet(newTweet: any) {
    const constructedScheduled: TweetModel = TweetService.tweetModelConstructor((newTweet));
    console.log(constructedScheduled);
  }

  static tweetModelConstructor(newTweet): TweetModel {
    return new TweetModel(newTweet.tweetBody, newTweet.scheduleType,
      {number: newTweet.reminders.null, unit: newTweet.reminders.unit}, newTweet.setDate,
      {directMessage: newTweet.tweetType.Dm, public: newTweet.tweetType.public},
      newTweet.userNames, null);
  }


}
