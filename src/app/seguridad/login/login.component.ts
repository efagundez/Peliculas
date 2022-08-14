import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private seguridadService: SeguridadService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  errores: string[] = [];

  login(credenciales: credencialesUsuario){
    this.seguridadService.login(credenciales)
    .subscribe({
      next: respuesta => {
        this.seguridadService.guardarToken(respuesta);
        this.router.navigate(['/']);
      }, error: errores => this.errores = 
          parsearErroresAPI(errores)
    });
  }

}
