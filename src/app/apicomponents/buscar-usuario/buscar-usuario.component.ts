import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from '../buscar-usuario/usuario.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss']
})
export class BuscarUsuarioComponent implements OnInit {

  
  @ViewChild('k', {static: false}) buscarForm: NgForm;
  public loading= false;
  public usuarios= [];
  filterUsuarios = '';

  constructor(private router: Router,
      private route: ActivatedRoute,
      private usuarioService :UsuarioService) { }


  ngOnInit() {
  } 

  // On submit button click
  onSubmit() {
    this.buscarForm.reset();
  }

  public buscar (busqueda: NgForm){
    this.loading = true;
    const buscarForm ={
      tipoUsuario: busqueda.form.value.user,
      correo: busqueda.form.value.email,
      password: busqueda.form.value.password
    }
  

  this.usuarioService.buscarSuccesful(buscarForm).subscribe(dataFinal => {
    this.loading = true;
   this.usuarios =dataFinal.articles;
   console.log(this.usuarios) 
   
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
