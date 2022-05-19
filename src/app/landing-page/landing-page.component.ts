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
        poster: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/terminator-6-poster-sarah-connor-1558597658.jpg?crop=1xw:1xh;center,top&resize=768:*'
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
