import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogeoService {

  constructor(public http:HttpClient) { }

  login(nombre:string,pass:string):Observable<any>
  {

    //parte de enviar
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);
    console.log(body);
    return this.http.post("https://tp-progra.000webhostapp.com/public/login", body, {headers: myheader}).pipe(res => res);
  

  }

  registro(nombre:string,pass:string,tipo:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);
    body = body.set('tipo', tipo);

    console.log(body);
    return this.http.post("https://tp-progra.000webhostapp.com/public/usuario/", body, {headers: myheader}).pipe(res => res);
  
 
  }

  registroCliente(nombre:string,pass:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);

    console.log(body);
    return this.http.post("https://tp-progra.000webhostapp.com/public/usuario/usuario", body, {headers: myheader}).pipe(res => res);
  
  }

  traerMesas(): Observable<any> 
  {
    return this.http.get('https://tp-progra.000webhostapp.com/public/mesa/').pipe(res => res);
  }

  traerUsuarios(token): Observable<any> 
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://tp-progra.000webhostapp.com/public/usuario/traer/' + token,{headers:myheader}).pipe(res => res);
  }  

  traerPedidos(token): Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.get('https://tp-progra.000webhostapp.com/public/pedido/'+ token ,{headers:myheader}).pipe(res => res);
  
  }

  agregarMesa(estado:string, codigo:string, token:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('estado', estado);
    body = body.set('codigo', codigo);
    body = body.set('token', token);

    console.log(body);

    let retorno;
   
    retorno = this.http.post("https://tp-progra.000webhostapp.com/public/mesa/", body, {headers: myheader}).pipe(res => res);
    return retorno;
    

  }

  borrarMesa(id)
  {
    
  }

  agregarPedido(codigo:string,idMesa:string,tipoPedido:string,quePidio:string,precio:string,token:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('codigo', codigo);
    body = body.set('idMesa', idMesa);
    body = body.set('tipoPedido', tipoPedido);
    body = body.set('quePidio', quePidio);
    body = body.set('precio', precio);

    body = body.set('token', token);

    //console.log(body);

    let retorno;
   
    retorno = this.http.post("https://tp-progra.000webhostapp.com/public/pedido/", body, {headers: myheader}).pipe(res => res);
    return retorno;
  }

  buscarPedido(codigoMesa:string, codigoPedido:string):Observable<any>
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('codigoMesa', codigoMesa);
    body = body.set('codigoPedido', codigoPedido);

    //console.log(body);

    let retorno;
   
    retorno = this.http.post("https://tp-progra.000webhostapp.com/public/pedido/traerUno/", body, {headers: myheader}).pipe(res => res);
    return retorno;
    

  }
}
