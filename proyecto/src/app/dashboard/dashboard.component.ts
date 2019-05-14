import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProductService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
