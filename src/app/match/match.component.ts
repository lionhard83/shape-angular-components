import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { Match } from '../models/Match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  public matches: Match[] = [];
  constructor(public matchService: MatchService) { }

  ngOnInit() {
    let promise = this.matchService.all();
    promise.then((results)=> {
      this.matches = results;
    })
  }

}
