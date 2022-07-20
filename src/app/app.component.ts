import { Component } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TelekocsiApp';
  service: OrderService;
  constructor(service: OrderService){
    this.service = service;
  }
}
