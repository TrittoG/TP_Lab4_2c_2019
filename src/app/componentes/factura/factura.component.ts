import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  public token;

  

  constructor(public logServ:LogeoService, public router:Router) { }
  
  ngOnInit() {
    this.token = localStorage.getItem("token");

    
  }

  generarExcel()
  {
    //console.log("funciona de 10 por ahora")
    
    this.logServ.facturaExcel(this.token).subscribe(res=>
      {
        console.log(res);
        alert(res.Mensaje);
        location.href = res.url;
      })
  }
  

  generarPDF()
  {
    console.log("funciona de 10 por ahora")

    this.logServ.facturarPDF(this.token).subscribe(res=>
      {
        console.log(res);
        alert(res.Mensaje);
        
        let pdf = document.getElementById("PDF") as HTMLEmbedElement;
        pdf.src = res.url;
      })
  }

  facturarMesa()
  {
    this.logServ.facturarMesa(this.token).subscribe(res=>
      {
        console.log(res);
        let pdf = document.getElementById("PDF") as HTMLEmbedElement;
        pdf.src = res.url;
      },
      err=>
      {
        console.log(err);
      })
  }
}
