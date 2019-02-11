import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  public matches: any[] = [];
  constructor(public matchService: MatchService) { }

  ngOnInit() {
    let promise = this.matchService.all();
    promise.then((results)=> {
      this.matches = results;
      console.log(this.matches);
    })
  }

}
