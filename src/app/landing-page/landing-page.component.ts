import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
      this.peliculasEnCines = [{
        titulo: "Spiderman - Far From Home",
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_QL75_UY562_CR21,0,380,562_.jpg'
      },
      {
        titulo: "Moana",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50,
        poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_QL75_UX380_CR0,35,380,562_.jpg'
      },
      {
        titulo: "El Coco",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50,
        poster: 'https://static.wikia.nocookie.net/terminator/images/a/a0/Terminator_3_Cartel.jpg/revision/latest/scale-to-width-down/250?cb=20150714112731&path-prefix=es'
      },
      /* {
        titulo: "Instant Family",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50
      },
      {
        titulo: "James Bond, Not Time for Die",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50
      },
      {
        titulo: "Avatar",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50
      },
      {
        titulo: "Jurassic World",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50
      },
      {
        titulo: "Animales fantásticos",
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 2345.50
      }, */
      
    ];
  }
  title = 'El valor que yo quiera';
  ocultar = false;

  peliculasEnCines;
  peliculasProximosExtrenos =  [{
    titulo: "Avengers - Endgame",
    fechaLanzamiento: new Date(),
    precio: 1400.99,
    poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_QL75_UY562_CR21,0,380,562_.jpg'
  },
  {
    titulo: "Inception",
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 2345.50
  },
  {
    titulo: "Rocky",
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 2345.50
  },
];


}
