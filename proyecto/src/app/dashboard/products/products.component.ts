import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { ProductManageService } from 'src/app/shared/productManage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     products: Product[] = [];
     subscription: Subscription;
     searchData: string;
     currPage: number = 1;

  constructor(private productManageService: ProductManageService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.subscription = this.productManageService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  this.productService.getProductsFromDB();
  }

  search(){

  }

  onNewProduct(){
    this.router.navigate(['/register-product']);
  }

}
