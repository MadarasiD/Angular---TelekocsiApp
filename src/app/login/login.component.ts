import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* az Orderservice-ben lévő függvényt és változót itt kapcsoljuk össze a login component-tel*/
  service: OrderService;
  constructor(service: OrderService){
    this.service = service;
  }
  ngOnInit(): void {
    this.service.disableUsers();
  }

}
