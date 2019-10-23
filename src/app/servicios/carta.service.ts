import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  public laCarta = [
    {
      "id": 1,
      "nombre": "Pizza comun",
      "descripcion": "Queso tomate",
      "precio": "460",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 2,
      "nombre": "Lawrence",
      "descripcion": "Martinez",
      "precio": "460",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 3,
      "nombre": "John",
      "descripcion": "Martinez",
      "precio": "460",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 4,
      "nombre": "Gary",
      "descripcion": "Allen",
      "precio": "460",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 5,
      "nombre": "Martin",
      "descripcion": "Morgan",
      "precio": "460",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 6,
      "nombre": "Shirley",
      "descripcion": "Evans",
      "precio": "460",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 7,
      "nombre": "Anne",
      "descripcion": "Harris",
      "precio": "460",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 8,
      "nombre": "Bobby",
      "descripcion": "Campbell",
      "precio": "460",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 9,
      "nombre": "Roger",
      "descripcion": "Morgan",
      "precio": "460",
      "foto": "./assets/comida.jpg"
      
    },
    
  ]


  constructor() { }

  borrar(id)
  {
   
  }


  traerCarta()
  {
    


    return this.laCarta;
  }
}
