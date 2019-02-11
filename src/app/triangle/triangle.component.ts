import { Component, OnInit } from '@angular/core';
import { Triangle } from '../models/Triangle';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  public sideA: number = 0;
  public sideB: number = 0;
  public triangle: Triangle = new Triangle(0, 0);
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.triangle = new Triangle(this.sideA, this.sideB);
  }

}
