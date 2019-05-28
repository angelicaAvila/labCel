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
     text;
     flag:number =0;

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

  isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
  }

  search(){
    var delArr =[];
    if(!this.isNullOrWhiteSpace(this.text)){
      this.text = this.text.toLowerCase();
      for(let i = 0; i<this.products.length; i++){
          if(!this.products[i].nombre.toLowerCase().includes(this.text))
            delArr.push(i);
      }
      for(let i=delArr.length-1;i>=0;i--)
        this.products.splice(delArr[i],1);
    }

    else{
      this.subscription = this.productManageService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );  
        this.productService.getProductsFromDB();
      }
  }

}
