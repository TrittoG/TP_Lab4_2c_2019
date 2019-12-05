import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public pedidos:any;
  public quePidio:any;

  public pedidoAModificar:any;
  public tiempoEstimado:any;
  public estado:any;

  public tipo;

  constructor(public logServ:LogeoService, public router:Router) { }

  list1: any[];
  list2: any[];
  
  ngOnInit() {
    this.tipo = localStorage.getItem("tipo");
      let token = localStorage.getItem("token");
      this.logServ.traerPedidos(token).subscribe(res=>
        {
          //console.log(res);
          this.pedidos = res.respuesta;
          this.quePidio = res.respuesta[0].quePidio;
          //this.quePidio = JSON.stringify(this.quePidio);
          //console.log(this.quePidio);
        },
        err=>
        {
          console.log(err);
          alert(err.error.respuesta);
          this.router.navigate(['home/ppal']);
        })
  }

  //
  //hacer lector qr para poder ver las mesas disponibles............
  //
  //hacer lector qr de la mesa para mostrar el codigo de la mesa
  //

  abrirDiv(pedido:any)
  {
    this.pedidoAModificar = pedido;
    let div = document.getElementById("divModifica");
    //console.log(this.pedidoAModificar.estado)
    if(this.pedidoAModificar.estado == 'pendiente' || this.tipo == "socio")
    {
      
      div.style.display = "block";
    }
    else
    {
      if(div.style.display == "block")
      {
        div.style.display = "none";
      }
      this.modificarpedido();
    }
  }
  modificarpedido()
  {
    let token = localStorage.getItem("token");

    let pedido = this.pedidoAModificar;

    
    let estado =  pedido.estado;
    let estadoFinal;
    let tiempo = this.tiempoEstimado;
     //console.log(estado);
    switch (this.tipo) {
      case 'cocinero':
          if(estado == 'pendiente')
          {
            estadoFinal = 'en preparacion';
            //console.log(estadoFinal)
          }
          else if(estado == 'en preparacion')
          {
            estadoFinal = 'listo para servir';
            tiempo = "0";
          }
          break;

      case 'repostero':
        if(estado == 'pendiente')
        {
          estadoFinal = 'en preparacion';
          //console.log(estadoFinal)
        }
        else if(estado == 'en preparacion')
        {
          estadoFinal = 'listo para servir';
          tiempo = "0";
        }
        break;


      case 'bartender':
          if(estado == 'pendiente')
          {
            estadoFinal = 'en preparacion';
            //console.log(estadoFinal)
          }
          else if(estado == 'en preparacion')
          {
            estadoFinal = 'listo para servir';
            tiempo = "0";
          }
          break;

      case 'mozo':
        if(estado == 'listo para servir')
        {
          estadoFinal = 'entregado';
          tiempo = "0";
        }
        else if(estado == 'entregado')
        {
          estadoFinal = 'finalizado';
          tiempo = "0";
        }    
        break;
      case 'socio':
        estadoFinal = this.estado + "";
        tiempo = this.tiempoEstimado;
        break;
    }
    //console.log(tiempo)
    //console.log(pedido);
    this.logServ.modificarPedidoSinCambios(pedido.codigoPedido,token,estadoFinal,tiempo,pedido.tipo)
    .subscribe(res=>{
      alert(res.respuesta);
      this.ngOnInit();
    },
    err=>
    {
      alert("algun error");
    }) 
  }
}
