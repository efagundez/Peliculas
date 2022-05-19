import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css']
})
export class IndiceCinesComponent implements OnInit {

  constructor( private cinesService: CinesService) { }

  cines: cineDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;


  ngOnInit(): void {

      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
/*     this.generosService.obtenerTodos().subscribe({
      next: (respuesta: HttpResponse<generoDTO[]>) => this.generos = respuesta.body,
      error: (error) => console.error(error),
      complete: () => console.info(respuesta.headers.get("cantidadTotalRegistros")) 
  });  */
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<cineDTO[]>) => {
      this.cines = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }/*), error => console.error(error)):*/ )
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.cinesService.borrar(id).subscribe({
      next: () => this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar),
      error: (error) => console.error(error)
    });

  }

  
}
