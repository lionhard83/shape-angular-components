import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeComponent } from './shape/shape.component';
import { TriangleComponent } from './triangle/triangle.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    TriangleComponent,
    SquareComponent,
    RectangleComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
