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
      "nombre": "Pizza especial",
      "descripcion": "Tomate y jamon",
      "precio": "490",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 3,
      "nombre": "Lomo",
      "descripcion": "Lomo al verdeo con salsa de champiñones",
      "precio": "650",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 4,
      "nombre": "Milanesa a caballo",
      "descripcion": "Milanesa con huevo frito mas papas",
      "precio": "500",
      "foto": "./assets/comida.jpg"
      
    },
    {
      "id": 5,
      "nombre": "Hamburguesa Comun",
      "descripcion": "hamburguesa con queso y papas",
      "precio": "300",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 6,
      "nombre": "Hamburguesa doble",
      "descripcion": "doble hamburguesa con queso y bacon",
      "precio": "460",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 7,
      "nombre": "Hamburguesa LA COMANDA",
      "descripcion": "doble hamburguesa con queso, bacon, salsa ahumada bbq, tomate lechuga y hongos",
      "precio": "1000",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 8,
      "nombre": "Empanadas",
      "descripcion": "carne",
      "precio": "80",
      "foto": "./assets/comida.jpg"
    },
    {
      "id": 9,
      "nombre": "Empanadas",
      "descripcion": "Jamon y queso",
      "precio": "80",
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
