import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nombreingresado;
  public mesas = [];


  //////////////////-----------------------------------------

  //tengo que hacer un componente de mesas y ahi poner todo lo referido a las mesas para
  //que este todo mas ordenado

  //terminar el ingreso de mesas y verificar lo del token

  //

  //-----------------------------------------------------
  constructor(public miServ:LogeoService) { 
    
  }

  ngOnInit() {
    
    this.nombreingresado = localStorage.getItem("nombreingresado");
    console.log(this.nombreingresado);

    this.miServ.traerMesas().subscribe(res=>
      {
        this.mesas = res;
  
      });
  }

  agregarMesa()
  {
    let token = localStorage.getItem("token");
    this.miServ.agregarMesa("","","").subscribe(res=>
      {
        console.log(res);
      })
  }
}
