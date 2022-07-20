import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  service: OrderService;
  constructor(service: OrderService) { 
    this.service = service;
  }

  ngOnInit(): void {
    this.service.disableGuest();
  }

}
