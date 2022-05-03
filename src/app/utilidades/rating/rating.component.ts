import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [];
  votado = false;
  ratingAnterior = 0;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouserEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else{
      this.ratingSeleccionado = 0;
    }
    
  }

  rate(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
