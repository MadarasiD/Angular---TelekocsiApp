import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  service: OrderService;
  constructor(service: OrderService) { 
    this.service = service;
  }

  ngOnInit(): void {
    this.service.logout();
  }

}
