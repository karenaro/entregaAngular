import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultadoProductos= [];
   for( const producto of value ){
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoProductos.push(producto)
      }
   }
   return resultadoProductos
  }

}
