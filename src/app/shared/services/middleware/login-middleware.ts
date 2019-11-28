import { Injectable } from '@angular/core' ;
import { CanActivate, Router} from '@angular/router' ;
import { Observable } from 'rxjs';
import { LoginPagesService } from '../../../pages/content-layout-page/login-page/login-pages.service';

@Injectable()

export class LoginMiddleware implements CanActivate {

    constructor(
        public router:Router,
        public loginPagesService: LoginPagesService
    ){}

    canActivate (){
        if(this.loginPagesService.estaLogueado()){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }

    }

}
