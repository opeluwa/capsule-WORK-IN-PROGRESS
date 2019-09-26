import {Component, Input, OnInit} from '@angular/core';
import {TweetService} from '../../shared/tweet.service';
import {TweetModel} from '../../shared/tweet.model';

@Component({
  selector: 'app-active-tweet-item',
  templateUrl: './active-tweet-item.component.html',
  styleUrls: ['./active-tweet-item.component.css']
})
export class ActiveTweetItemComponent implements OnInit {
  @Input() index: number;
  Item: TweetModel;
  constructor(private tweetServ: TweetService) { }

  ngOnInit() {
    this.Item = this.tweetServ.getItem(this.index);
    console.log(this.Item);
  }

}
