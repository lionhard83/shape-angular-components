  import { Component, OnInit } from '@angular/core';
import { Square } from '../models/Square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  public side: number = 0;
  public square: Square = new Square(0);
  constructor() { }

  ngOnInit() {
  }

  createSquare() {
    if (this.side !== undefined) {
      this.square = new Square(this.side);
    }
    
  } 

}
