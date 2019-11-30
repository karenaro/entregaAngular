import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';
import { LoteService} from '../buscar-lote/lote.service'

@Component({
  selector: 'app-crear-lote',
  templateUrl: './crear-lote.component.html',
  styleUrls: ['./crear-lote.component.scss']
})
export class CrearLoteComponent implements OnInit {
  @ViewChild ('p', {static: false}) crearlForm: NgForm;
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loteService :LoteService) { }

  ngOnInit() {
  }


  public nuevoP(crearloteForm: NgForm){
    this.loading = true;
   const formCrearL ={
    capacidad: crearloteForm.form.value.cap,
    cantMin: crearloteForm.form.value.cantMin
   }
   this.loteService.crearSuccesful(formCrearL).subscribe(dataFinal => {
    this.loading = true;
    console.log(formCrearL);
    if (dataFinal.token) {
      const tokenCifrado = this.loteService.cifrarToken(dataFinal.token)
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
