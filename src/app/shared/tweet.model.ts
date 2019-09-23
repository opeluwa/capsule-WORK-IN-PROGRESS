import {reminderInterface} from './reminder.interface';
import {tweetTypeInterface} from './tweetType.interface';

export class TweetModel {
  constructor(public TweetBody: string,
              public scheduleType: number,
              public Reminder: reminderInterface,
              public setDate: number,
              public tweetType: tweetTypeInterface,
              public userNames: string[],
              public tweetId: string) {}
}
