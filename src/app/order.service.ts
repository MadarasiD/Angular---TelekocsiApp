import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient }  from '@angular/common/http';
import { TokenModel } from './token-model'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public loginmodel: LoginModel = new LoginModel();
  http: HttpClient;

  
  constructor(http: HttpClient) { 
    this.http = http;
  }

  public login(){
    this.http.post<TokenModel>('https://weblerapi.kovos.net/auth', this.loginmodel)
    .subscribe(t => console.log(t.token));
  }
}
