import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriangleComponent } from './triangle/triangle.component';
import { SquareComponent } from './square/square.component';
import { Rectangle } from './models/Rectangle';
import { RectangleComponent } from './rectangle/rectangle.component';
import { MatchComponent } from './match/match.component';
import { TeamsResultsComponent } from './teams-results/teams-results.component';
import { TeamsComponent } from './teams/teams.component';
import { GroupResultsComponent } from './group-results/group-results.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

const routes: Routes = [
  { path:'triangle', component: TriangleComponent},
  { path:'square', component: SquareComponent},
  { path:'rectangle', component: RectangleComponent},
  { path:'matches', component: MatchComponent},
  { path:'teams', component: TeamsComponent},
  { path:'teams/results', component: TeamsResultsComponent},
  { path:'teams/group_results', component: GroupResultsComponent},
  { path: 'tweets', component: TweetsComponent},
  { path: 'tweets/create', component: CreateTweetComponent},
  { path: 'tweets/:id', component: TweetDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
