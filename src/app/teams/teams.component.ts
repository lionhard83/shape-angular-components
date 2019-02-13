import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public teams: Team[] = [];
  constructor(public teamService: TeamService) { }

  ngOnInit() {
      this.teamService.all().then(results => {
        this.teams = results;
        console.log(results);
      })
  }

}
