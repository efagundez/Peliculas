import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MarkdownModule} from 'ngx-markdown';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
//import "leaflet/dist/images/marker-shadow.png";
//import "leaflet/dist/images/marker-icon-2x.png";

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    LeafletModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
