import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../formulario-genero/genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {

  }

  guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }



}
