import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-factura-mesa',
  templateUrl: './factura-mesa.component.html',
  styleUrls: ['./factura-mesa.component.scss']
})
export class FacturaMesaComponent implements OnInit {

  public mesa;

  public respuesta;
  constructor(public logServ:LogeoService) { }

  ngOnInit() {
  }

  facturaMesa()
  {
    if(this.mesa != null)
    {
      this.logServ.facturaMesaEspecifica(this.mesa).subscribe(res=>
        {
          this.respuesta = res;
          console.log(res);
          let pdf = document.getElementById("PDF") as HTMLEmbedElement;
          pdf.src = res.url;
        })
    }
  }
}
