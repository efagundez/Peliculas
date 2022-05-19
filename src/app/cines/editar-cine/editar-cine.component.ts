import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinesService } from 'src/app/cines/cines.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {


  constructor(private router: Router,
    private cinesService: CinesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO;
  errores: string[] = []; 


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.cinesService.obtenerPorId(params.id)
        .subscribe({
          next: (cine) => this.modelo = cine,
          error: (error) => this.router.navigate(['/cines'])
        })
    });

    /*     this.generosService.obtenerTodos().subscribe({
      next: (respuesta: HttpResponse<generoDTO[]>) => this.generos = respuesta.body,
      error: (error) => console.error(error),
      complete: () => console.info(respuesta.headers.get("cantidadTotalRegistros")) 
  });  */

  }

  guardarCambios(cine: cineCreacionDTO) {
    // ... guardar los cambios
    this.cinesService.editar(this.modelo.id, cine)
      .subscribe({
        next: () => this.router.navigate(['/cines']),
        error: (error) => parsearErroresAPI(error)
      });
  };
}
