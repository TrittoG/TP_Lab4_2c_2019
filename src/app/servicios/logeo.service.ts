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

  registro(nombre:string,pass:string,tipo:string)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('nombre', nombre);
    body = body.set('password', pass);
    body = body.set('tipo', tipo);

    console.log(body);
    return this.http.post("https://tp-progra.000webhostapp.com/public/usuario/", body, {headers: myheader}).pipe(res => res);
  
 
  }

  registroCliente(nombre:string,pass:string)
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

  agregarMesa(estado:string, codigo:string, token:string)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('estado', estado);
    body = body.set('codigo', codigo);
    body = body.set('token', token);

    console.log(body);
    return this.http.post("https://tp-progra.000webhostapp.com/public/mesa/", body, {headers: myheader}).pipe(res => res);
  }
}
