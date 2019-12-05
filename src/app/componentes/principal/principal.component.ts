import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public tipo;

  constructor(private cockyServ:CookieService) { }

  ngOnInit() {
    //this.verificarMostrarCockies();
    this.tipo = localStorage.getItem("tipo");
  }

  // aceptar_cookies()
  // {
  //   let divCokies = document.getElementById("overbox3")
  //   let divHijo = document.getElementById("infobox3");

  //   divCokies.style.display = "none";
  //   divHijo.style.display = "none";

  //   this.cockyServ.set("chekeadoCartelCoockies","si");
  // }

  // verificarMostrarCockies()
  // {
  //   let respuesta = this.cockyServ.get("chekeadoCartelCoockies");
  //   if(respuesta == "si")
  //   {
  //     let divCokies = document.getElementById("overbox3")
  //     let divHijo = document.getElementById("infobox3");

  //     divCokies.style.display = "none";
  //     divHijo.style.display = "none";
  //   }
  // }
}
