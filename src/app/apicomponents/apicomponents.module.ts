import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicomponentsRoutingModule } from './apicomponents-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule } from '@angular/forms';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';


@NgModule({
  declarations: [CrearProductoComponent, BuscarProductoComponent],
  imports: [
    CommonModule,
    ApicomponentsRoutingModule,
    NgbModule,
    FormsModule,
  ]
}) 
export class ApicomponentsModule { }
