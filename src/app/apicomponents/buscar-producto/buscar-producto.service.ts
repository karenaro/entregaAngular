import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers} from '@angular/http';
import { Body } from '@angular/http/src/body';
import {pipe} from 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {map, catchError} from 'rxjs/operators';
import { environment } from 'environments/environment';
import * as CryptoJS from 'crypto-js';
import { Buffer } from 'buffer'

@Injectable({
  providedIn: 'root'
})
export class BuscarProductoService {
  private token; 

  constructor( private httpClient: HttpClientModule,
    private http: Http) { }

    public buscarSuccesful(data):Observable<any> {
      let url =environment.urlWebApi+'articles';
      console.log(url);
        return this.http.get(url
          ,{headers : this.headersREST()})
          .pipe(map(res => {
            return res.json();
        }), pipe(catchError(this.handleError)))
    }


    //crear producto 
    public crearSuccesful(data):Observable<any> {
      let url =environment.urlWebApi+'article';
      console.log(url);
        return this.http.post(url
          ,data,{headers : this.headersREST()})
          .pipe(map(res => {
            return res.json();
        }), pipe(catchError(this.handleError)))
    }



   //headers
   private headersREST(): Headers{
    const myHeaders = new Headers();
    const token = this.revelarToken(sessionStorage.getItem('token'))
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer '+token.tokenValid);
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

  public revelarToken (tokenCifrado) {
    const decrypted = CryptoJS.AES.decrypt(tokenCifrado, CryptoJS.enc.Utf8.parse(environment.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(environment.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const dataDecrypt = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8), 'base64').toString('ascii');
    const response = {
      nameToken: 'token',
      tokenValid: dataDecrypt
    }
    return response;
  }



  
}
 