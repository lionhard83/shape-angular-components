import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  public random: number;
  constructor() { 
    this.random = Math.random()
  }

  ngOnInit() {
  }

}
