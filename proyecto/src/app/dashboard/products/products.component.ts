import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     @Input() index: number;
     products: Product[];
     //subscription: Subscription;

  constructor( private dataService: DataService, 
               private productService: ProductService) {
   }

  ngOnInit() {
    
  }


  /*ngOnDestroy(){
       this.subscription.unsubscribe();
  }*/
}
