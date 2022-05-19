import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private router: Router,
    private actoressService: ActoresService,
    private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO;
  errores: string[] = [];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.actoressService.obtenerPorId(params.id)
        .subscribe({
          next: (actor) => this.modelo = actor,
          error: (error) => this.router.navigate(['/actores'])
        })
    });

    /*     this.generosService.obtenerTodos().subscribe({
      next: (respuesta: HttpResponse<generoDTO[]>) => this.generos = respuesta.body,
      error: (error) => console.error(error),
      complete: () => console.info(respuesta.headers.get("cantidadTotalRegistros")) 
  });  */

  }

  guardarCambios(actor: actorCreacionDTO) {
    // ... guardar los cambios
    console.log(actor);
    this.actoressService.editar(this.modelo.id, actor)
      .subscribe({
        next: (actor) => this.router.navigate(['/actores']),
        error: (error) => parsearErroresAPI(error)
      });
  };

}
