import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenModel } from './token-model';
import { Router } from '@angular/router';
import {  Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public loginmodel: LoginModel = new LoginModel();
  public currentOrder: Order = new Order();
  http: HttpClient;
  router: Router;
  public orders: Array<Order> = new Array<Order>();

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  public login(){
    this.http.post<TokenModel>('https://weblerapi.kovos.net/auth', this.loginmodel)
    .subscribe(t => {
      localStorage.setItem('ordertoken', t.token);
      localStorage.setItem('username', this.loginmodel.username);
      this.router.navigate(['/browse']);
    });
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ordertoken') != null;
  }

  public logout(){
    localStorage.removeItem('ordertoken');
    localStorage.removeItem('username');
    this.router.navigate(['/browse']);
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

  public removeORder(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('ordertoken')}`
    });

    this.http.delete('https://weblerapi.kovos.net/car/' + id,
     {headers: headers})
    .subscribe(t => this.getOrders());
  }

  public createOrder(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('ordertoken')}`
    });
    this.http.post('https://weblerapi.kovos.net/car', this.currentOrder, 
    {headers: headers})
    .subscribe(t => this.router.navigate(['/browse']));
  }

  

}
