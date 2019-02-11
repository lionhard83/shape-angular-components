import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../models/Rectangle';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  public sideA: number = 0;
  public sideB: number = 0;
  public rectangle: Rectangle = new Rectangle(0, 0);
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.rectangle = new Rectangle(this.sideA, this.sideB);
  }

}
