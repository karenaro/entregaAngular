import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule  ,
        HttpClientModule       
    ],
    declarations: [
    LoginPageComponent,
    RegisterComponent]
})
export class ContentPagesModule { }
