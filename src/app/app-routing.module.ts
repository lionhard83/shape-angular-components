import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriangleComponent } from './triangle/triangle.component';
import { SquareComponent } from './square/square.component';
import { Rectangle } from './models/Rectangle';
import { RectangleComponent } from './rectangle/rectangle.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path:'triangle', component: TriangleComponent},
  { path:'square', component: SquareComponent},
  { path:'rectangle', component: RectangleComponent},
  { path:'matches', component: MatchComponent},
  { path:'', component: SquareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
