import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { generoCreacionDTO } from '../formulario-genero/genero';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router,
    private generosService: GenerosService,
    private activatedRoute: ActivatedRoute) { }

  modelo: generoDTO;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.generosService.obtenerPorId(params.id)
        .subscribe({
          next: (genero) => this.modelo = genero,
          error: (error) => this.router.navigate(['/generos'])
        })
    });

    /*     this.generosService.obtenerTodos().subscribe({
      next: (respuesta: HttpResponse<generoDTO[]>) => this.generos = respuesta.body,
      error: (error) => console.error(error),
      complete: () => console.info(respuesta.headers.get("cantidadTotalRegistros")) 
  });  */

  }

  guardarCambios(genero: generoCreacionDTO) {
    // ... guardar los cambios
    this.generosService.editar(this.modelo.id, genero)
      .subscribe({
        next: () => this.router.navigate(['/generos']),
        error: (error) => parsearErroresAPI(error)
      });
  };
}

