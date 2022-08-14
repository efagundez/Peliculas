import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.cargarDatos();

    //.subscribe({
    //next: (genero) => this.modelo = genero,
    //error: (error) => this.router.navigate(['/generos'])
    //})
  }
  title = 'El valor que yo quiera';
  ocultar = false;

  peliculasEnCines: PeliculaDTO[];
  peliculasProximosExtrenos: PeliculaDTO[];

  cargarDatos(){
    this.peliculasService.obtenerLandingPage().subscribe({ 
      next: (landingPage) => {this.peliculasEnCines = landingPage.enCines;
         this.peliculasProximosExtrenos = landingPage.proximosEstrenos; }, 
    });
  }

  borrado(){
    this.cargarDatos();
  }

}
