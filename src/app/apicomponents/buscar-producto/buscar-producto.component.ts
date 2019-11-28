import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { BuscarProductoService } from './buscar-producto.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent  {

  @ViewChild('k', {static: false}) buscarForm: NgForm;
  public loading= false;
  public productos= [];

  constructor(private router: Router,
      private route: ActivatedRoute,
      private buscarProductoService :BuscarProductoService) { }


  ngOnInit() {
  } 

  // On submit button click
  onSubmit() {
    this.buscarForm.reset();
  }

  public buscar (busqueda: NgForm){
    this.loading = true;
    const buscarForm ={
      nombre: busqueda.form.value.nombre,
      cantPaq: busqueda.form.value.cantidad,
      pesoCant: busqueda.form.value.peso,
      precio: busqueda.form.value.precio
    }
  

  this.buscarProductoService.buscarSuccesful(buscarForm).subscribe(dataFinal => {
    this.loading = true;
   this.productos =dataFinal.articles;
   console.log(this.productos)

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
 