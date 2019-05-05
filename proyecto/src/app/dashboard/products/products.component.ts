import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     @Input() index: number;
     products: Product[];

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products = this.productService.getProductsFromDB("");
  }

}
