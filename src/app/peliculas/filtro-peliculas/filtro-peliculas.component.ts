import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private location: Location,
    private activatedRoute: ActivatedRoute ) { }

    form: FormGroup

    generos = [
      {id: 1, nombre: 'Drama'}, 
      {id: 2, nombre: 'Accion'},
      {id: 3, nombre: 'Comedia'}
    ];

    peliculas = [
      {titulo: 'Spider-Man: Far From Home', enCines: false, proximosExtrenos: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_QL75_UY562_CR21,0,380,562_.jpg'},
      {titulo: 'Moana', enCines: true, proximosExtrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg'},
      {titulo: 'Massive Talent', enCines: true, proximosExtrenos: false, generos: [1,2], poster: 'https://es.web.img2.acsta.net/pictures/22/03/22/16/25/2405349.jpg'},
      {titulo: 'Terminator Destino Oscuro', enCines: false, proximosExtrenos: true, generos: [2], poster: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/terminator-6-poster-sarah-connor-1558597658.jpg?crop=1xw:1xh;center,top&resize=768:*'},
    ]

    peliculasOriginal = this.peliculas

    formularioOriginal = {
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnUrl();
    })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if (params.generoId) {
        objeto.generoId = Number(params.generoId);        
      }

      if (params.proximosEstrenos) {        
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId != '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);  
    }

    if (valoresFormulario.proximosExtrenos) {
      queryStrings.push(`proximosEstenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines) {
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
      
    }
    
    this.location.replaceState('peliculas/buscar', queryStrings.join('&') );
  }

  buscarPeliculas(valores: any){
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula=>pelicula.titulo.indexOf(valores.titulo) !== -1); 
    }    

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId)!== -1);
    }
    
    if (valores.proximosExtrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosExtrenos);
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
