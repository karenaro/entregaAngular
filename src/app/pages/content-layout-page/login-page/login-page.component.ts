import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginPagesService } from './login-pages.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  @ViewChild('f', {static: false}) loginForm: NgForm;
  public loading= false;

  constructor(private router: Router,
      private route: ActivatedRoute,
      private loginPagesService :LoginPagesService) { }

  // On submit button click
  onSubmit() {
      this.loginForm.reset();
  }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
      this.router.navigate(['register'], { relativeTo: this.route.parent });
  }
  
  public login (userLogin: NgForm){
    this.loading = true;
    const formLogin ={
      correo: userLogin.form.value.user,
      password: userLogin.form.value.password
    }
    
    //this.router.navigate(['carousel'], { relativeTo: this.route.parent });
  
    this.loginPagesService.loginSuccesful(formLogin).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal.token) {
        const tokenCifrado = this.loginPagesService.cifrarToken(dataFinal.token)
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

  /*
  iniciar(){
    this.router.navigateByUrl('/articles');
  }

  buscar(){
    console.log('autenticando')
    this.loginPagesService.autenticarService('karen')
  }
  */

}
