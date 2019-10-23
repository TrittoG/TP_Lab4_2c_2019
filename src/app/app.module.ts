import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//importo mis componentes
import {RecaptchaModule} from 'ng-recaptcha';
import { MesasComponent } from './componentes/mesas/mesas.component';

//para las tabs animadas
import {MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
//importo lo de primeng
import {PickListModule} from 'primeng/picklist';
import { PedidoNuevoComponent } from './componentes/pedido-nuevo/pedido-nuevo.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { MesasDispComponent } from './componentes/mesas-disp/mesas-disp.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { PedidoRutaComponent } from './componentes/pedido-ruta/pedido-ruta.component';
import { CartaSociosComponent } from './componentes/carta-socios/carta-socios.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MesasComponent,
    UsuariosComponent,
    PrincipalComponent,
    SobreNosotrosComponent,
    PedidosComponent,
    PedidoNuevoComponent,
    CartaComponent,
    MesasDispComponent,
    SociosComponent,
    PedidoRutaComponent,
    CartaSociosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RecaptchaModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    PickListModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
