import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { LoginMiddleware } from '../shared/services/middleware/login-middleware';

const routes: Routes = [
  {
    path: '', 
      //canActivate:[LoginMiddleware],
    children: [
      {
        path: 'crear-producto',
        component: CrearProductoComponent ,
        data: {
          title: 'Nuevo Producto'
        }
      }, {
        path: 'buscar-producto',
        component: BuscarProductoComponent ,
        data: {
          title: 'Buscar Producto'
        }
      }, 
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApicomponentsRoutingModule { }

