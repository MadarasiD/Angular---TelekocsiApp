import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  service: OrderService;
  constructor( service: OrderService ) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getOrders();
  }

}
