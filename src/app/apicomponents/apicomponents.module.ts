import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicomponentsRoutingModule } from './apicomponents-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule } from '@angular/forms';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { SharedModule } from '../shared/shared.module';
import { CrearLoteComponent } from './crear-lote/crear-lote.component';
import { BuscarLoteComponent } from './buscar-lote/buscar-lote.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';



@NgModule({
  declarations: [
    CrearProductoComponent, 
    BuscarProductoComponent, 
    CrearLoteComponent, 
    BuscarLoteComponent, 
    CrearUsuarioComponent, 
    BuscarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ApicomponentsRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule
  ]
}) 
export class ApicomponentsModule { }
