import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient }  from '@angular/common/http';
import { TokenModel } from './token-model'
import { Router } from '@angular/router';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public loginmodel: LoginModel = new LoginModel();
  http: HttpClient;
  router: Router;
  public orders:Array<Order> = new Array<Order>();
  
  constructor(http: HttpClient, router: Router) { 
    this.http = http;
    this.router = router;
  }

  public login(){
    this.http.post<TokenModel>('https://weblerapi.kovos.net/auth', this.loginmodel)
    .subscribe(t => { localStorage.setItem('ordertoken', t.token);
    this.router.navigate(['/browse']);
  });
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ordertoken') != null;
  }

  public logout() {
    localStorage.removeItem('ordertoken');
    this.router.navigate(['/login']);
  }

  public disableGuest(){
    if (!this.isLoggedIn()){
      this.router.navigate(['/browse']);
    }
  }

  public disableUsers(){
    if (this.isLoggedIn()){
      this.router.navigate(['/browse']);
    }
  }

  public getOrders(){
    this.http.get<Array<Order>>('https://weblerapi.kovos.net/car')
    .subscribe(t => {
      this.orders = t;
      console.log(this.orders);
    });
  }

}
