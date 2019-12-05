import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacer-encuesta',
  templateUrl: './hacer-encuesta.component.html',
  styleUrls: ['./hacer-encuesta.component.scss']
})
export class HacerEncuestaComponent implements OnInit {

  public comentario = "";
  public codigoMesa = "";
  public puntuacionMesa = 0;
  public puntuacionRestaurante = 0;
  public puntuacionMozo = 0;
  public puntuacionCocinero = 0;

  constructor(public logserv:LogeoService, public router:Router) { }

  ngOnInit() {
  }

  enviar()
  {
   this.logserv.hacerEncuesta(this.codigoMesa,this.puntuacionMesa,this.puntuacionRestaurante,this.puntuacionMozo,this.puntuacionCocinero,this.comentario).subscribe(res=>
    {
      console.log(res);
      alert(res);
      this.router.navigate(['home/ppal']);
    })
  }

  volver()
  {
    this.router.navigate(['home/ppal']);
  }
}
