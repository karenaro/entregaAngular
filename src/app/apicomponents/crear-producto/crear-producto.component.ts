import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';
import { BuscarProductoService } from '../buscar-producto/buscar-producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  @ViewChild ('f', {static: false}) crearpForm: NgForm;
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private buscarProductoService :BuscarProductoService) { }

  ngOnInit() {
    this.crearpForm.reset();
  }


  public nuevoP(crearproForm: NgForm){
    this.loading = true;
   const formLogin ={
     nombre: crearproForm.form.value.nom,
     cantPaq: crearproForm.form.value.cantPaq,
     pesoPaq: crearproForm.form.value.pesoPaq,
     precio: crearproForm.form.value.precio,
     lote: crearproForm.form.value.lote
   }
   this.buscarProductoService.crearSuccesful(crearproForm).subscribe(dataFinal => {
    this.loading = true;
    if (dataFinal.token) {
      const tokenCifrado = this.buscarProductoService.cifrarToken(dataFinal.token)
      sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
      this.router.navigate(['/components/carousel'])
      this.loading = false;
    }
  }, 
    error => {
     
        this.loading = true;
        Swal.fire({
          title: 'Algo ha fallado',
          text: error.Errors.message,
          type: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
        })
     
      this.loading = false;
    });
  this.loading = false;
  
}


}
