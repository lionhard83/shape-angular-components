import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  public tweets: Tweet[] = [];
  constructor(public tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.all().then(results => {
      this.tweets = results;
    })
  }

}
