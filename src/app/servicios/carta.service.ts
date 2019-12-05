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
      "foto": "./assets/comida.jpg",
      "tipo":"cocina"
      
    },
    {
      "id": 2,
      "nombre": "Pizza especial",
      "descripcion": "Tomate y jamon",
      "precio": "490",
      "foto": "./assets/comida.jpg",
      "tipo":"cocina"
    },
    {
      "id": 3,
      "nombre": "Cerveza",
      "descripcion": "Clasica artesanal",
      "precio": "650",
      "foto": "./assets/comida.jpg",
      "tipo":"bar"
      
    },
    {
      "id": 4,
      "nombre": "Vino",
      "descripcion": "Tinto de la casa",
      "precio": "500",
      "foto": "./assets/comida.jpg",
      "tipo":"bar"
      
    },
    {
      "id": 5,
      "nombre": "Flan",
      "descripcion": "Flan con DDL",
      "precio": "300",
      "foto": "./assets/comida.jpg",
      "tipo":"postre"
    },
    {
      "id": 6,
      "nombre": "Tiramisu",
      "descripcion": "de la casa",
      "precio": "460",
      "foto": "./assets/comida.jpg",
      "tipo":"postre"
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
