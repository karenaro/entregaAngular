import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import {BuscarLoteComponent} from './buscar-lote/buscar-lote.component';
import {CrearLoteComponent} from './crear-lote/crear-lote.component';
import {BuscarUsuarioComponent} from './buscar-usuario/buscar-usuario.component';
import {CrearUsuarioComponent} from './crear-usuario/crear-usuario.component';
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
      },{
        path: 'crear-lote',
        component: CrearLoteComponent ,
        data: {
          title: 'Nuevo Lote'
        }
      },{
        path: 'buscar-usuario',
        component: BuscarUsuarioComponent ,
        data: {
          title: 'Buscar Usuario'
        }
      },{
        path: 'crear-usuario',
        component: CrearUsuarioComponent ,
        data: {
          title: 'Nuevo Usuario'
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

