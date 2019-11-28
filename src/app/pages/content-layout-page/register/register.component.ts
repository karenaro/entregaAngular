import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  @ViewChild('f', {static: false}) registerForm: NgForm;
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private registerService:RegisterService){}

    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset(); 
    }
  

    public registro(userRegistro: NgForm){
      this.loading = true;
     const formLogin ={
       tipoUsuario: userRegistro.form.value.user,
       correo: userRegistro.form.value.email,
       password: userRegistro.form.value.password
     }
     this.registerService.registroSuccesful(userRegistro).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal.token) {
        console.log(userRegistro)
        const tokenCifrado = this.registerService.cifrarToken(dataFinal.token)
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
