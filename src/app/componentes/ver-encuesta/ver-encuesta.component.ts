import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-ver-encuesta',
  templateUrl: './ver-encuesta.component.html',
  styleUrls: ['./ver-encuesta.component.scss']
})
export class VerEncuestaComponent implements OnInit {

  public encuestas;
  constructor(public logServ:LogeoService) { }

  ngOnInit() {

    this.logServ.verEncuesta().subscribe(res=>
      {
        this.encuestas = res;
        console.log(this.encuestas)
      })
  }

}
