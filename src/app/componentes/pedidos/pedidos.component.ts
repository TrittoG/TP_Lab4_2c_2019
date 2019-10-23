import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public pedidos:any;
  public quePidio:any;

  constructor(public logServ:LogeoService, public router:Router) { }

  list1: any[];
  list2: any[];
  
  ngOnInit() {
      let token = localStorage.getItem("token");
      this.logServ.traerPedidos(token).subscribe(res=>
        {
          //console.log(res);
          this.pedidos = res.respuesta;
          this.quePidio = res.respuesta[0].quePidio;
          //this.quePidio = JSON.stringify(this.quePidio);
          console.log(this.quePidio);
        },
        err=>
        {
          console.log(err);
          alert(err.error.respuesta);
          this.router.navigate(['home/ppal']);
        })
  }

  modificarpedido(id)
  {
    
  }
}
