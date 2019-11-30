import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoteService } from '../buscar-lote/lote.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-buscar-lote',
  templateUrl: './buscar-lote.component.html',
  styleUrls: ['./buscar-lote.component.scss']
})
export class BuscarLoteComponent implements OnInit {

  @ViewChild('k', {static: false}) buscarForm: NgForm;
  public loading= false;
  public lotes= [];
  filterLote = '';

  constructor(private router: Router,
      private route: ActivatedRoute,
      private loteService :LoteService) { }


  ngOnInit() {
  } 

  // On submit button click
  onSubmit() {
    this.buscarForm.reset();
  }

  public buscar (busqueda: NgForm){
    this.loading = true;
    const buscarForm ={
    capacidad: busqueda.form.value.cap,
    cantMin: busqueda.form.value.cantMin
    }
  

  this.loteService.buscarSuccesful(buscarForm).subscribe(dataFinal => {
    this.loading = true;
   this.lotes =dataFinal.lotes;
   console.log(this.lotes) 
   
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
