import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {
  public tweet: Tweet;
  constructor(
    public tweetService: TweetService, 
    public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params.id;
    this.tweetService.byId(id).then(result => {
      this.tweet = result;
    })
  }

}
