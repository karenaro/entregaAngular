import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2'; 
import {UsuarioService} from '../buscar-usuario/usuario.service'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  @ViewChild ('p', {static: false}) crearpForm: NgForm; 
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usuarioService :UsuarioService) { }

  ngOnInit() {
    //this.crearpForm.reset();
  }


  public nuevoP(crearUsForm: NgForm){
    this.loading = true;
   const formCrear ={
    tipoUsuario: crearUsForm.form.value.user,
    correo: crearUsForm.form.value.email,
    password: crearUsForm.form.value.password
   }
   this.usuarioService.crearSuccesful(formCrear).subscribe(dataFinal => {
    this.loading = true;
    console.log(formCrear);
    if (dataFinal.token) {
      const tokenCifrado = this.usuarioService.cifrarToken(dataFinal.token)
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
