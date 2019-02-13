import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {
  public author: string;
  public message: string;
  constructor(public tweetService: TweetService, public router: Router) { }

  ngOnInit() {
  }

  addTweet() {
    this.tweetService.add({ author: this.author, message: this.message})
    .then(result => {
      console.log(result);
      this.router.navigate([`/tweets/${result.id}`])
    })
  }

}
