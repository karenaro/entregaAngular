import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers} from '@angular/http';
import { Body } from '@angular/http/src/body';
import {pipe} from 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {map, catchError} from 'rxjs/operators';
import {observable} from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { Routes, RouterModule, Router} from '@angular/router';
import { environment } from 'environments/environment';
import * as CryptoJS from 'crypto-js';
import { Buffer } from 'buffer'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  
  private token; 

  constructor(private httpClient: HttpClientModule,
    private http: Http,
    public  router: Router) { }

  //headers
  private headersREST(): Headers{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('access_token', localStorage.getItem('token'));
    return myHeaders;
  }

  private handleError(error: Response){
    const setError  = (error['_body'])? JSON.parse(error['_body']): error.statusText
    const json = {
      Error: setError,
      Resultado: [],
      EsExitoso:false,
      Status: error.status
    };
    return Observable.throw(json);
  }

  public registroSuccesful(data):Observable<any> {
    let url =environment.urlWebApi+'signin';
    console.log(url);
      return this.http.post(url
        ,data,{headers : this.headersREST()})
        .pipe(map(res => {
          return res.json();
      }), pipe(catchError(this.handleError)))
  }

  public cifrarToken (token) {
    token = Buffer.from(token).toString('base64')
    this.token = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token), CryptoJS.enc.Utf8.parse(environment.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(environment.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const reponse = {
      nameToken: 'token',
      cifrado: this.token
    }
    return reponse
  }
}

