import { Component, OnInit } from '@angular/core';
import {TweetService} from '../shared/tweet.service';
import {TweetModel} from '../shared/tweet.model';

@Component({
  selector: 'app-active-tweets',
  templateUrl: './active-tweets.component.html',
  styleUrls: ['./active-tweets.component.css']
})
export class ActiveTweetsComponent implements OnInit {
  ActiveItems: TweetModel[];
  constructor(private tweetServ: TweetService) { }

  ngOnInit() {
    this.tweetServ.scheduledTweetsSubject.subscribe(items => {
      this.ActiveItems = items;
      // console.log(items);
    });
  }

}
