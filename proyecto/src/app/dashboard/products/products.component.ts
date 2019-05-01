import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     @Input() index: number;
     products: Product[];
     //subscription: Subscription;

  constructor( private productService: ProductService) {
   }

  ngOnInit() {
    
  }

}
