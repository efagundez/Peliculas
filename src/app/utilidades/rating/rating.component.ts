import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';
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

  constructor(private seguridadService: SeguridadService) { }

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

    if (this.seguridadService.estaLogueado()) {
          this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
    } else{
      Swal.fire('Debe Loguearse', "No puede realizar esta acción", "error");
    }


  }

}
