import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {


  public usuarios = [];



  constructor(public miServ:LogeoService) { }

  ngOnInit() {

    //muestro los usuarios si se puede
     let token = localStorage.getItem("token");
    //console.log(token)
    this.miServ.traerUsuarios(token).subscribe(res=>
      {
        this.usuarios = res.respuesta;
       // console.log(res.respuesta);
      },
      err=>{
        //console.log(err);
        
      })  
  }

  mozo(id, tipo)
  {
    let token = localStorage.getItem("token");
    
    this.miServ.modificarUsuario(token,tipo,id).subscribe(res=>
      {
        console.log(res);
        this.ngOnInit();
      })
  }

  cocinero(id, tipo)
  {
    let token = localStorage.getItem("token");
    
    this.miServ.modificarUsuario(token,tipo,id).subscribe(res=>
      {
        console.log(res);
        this.ngOnInit();
      })
  }

  bartender(id, tipo)
  {
    let token = localStorage.getItem("token");
    
    this.miServ.modificarUsuario(token,tipo,id).subscribe(res=>
      {
        console.log(res);
        this.ngOnInit();
      })
  }

  repostero(id, tipo)
  {
    let token = localStorage.getItem("token");
    
    this.miServ.modificarUsuario(token,tipo,id).subscribe(res=>
      {
        console.log(res);
        this.ngOnInit();
      })
  }

}
