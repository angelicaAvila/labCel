import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductManageService } from '../shared/productManage.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myCategories =  null;
  myBrands = null;
  products: Product[];
  subscription: Subscription;

  constructor(private productManageService: ProductManageService,
              private productService: ProductService) { 
  }

  ngOnInit() {
    this.subscription = this.productManageService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
        this.showCategories(this.products);
        this.showBrands(this.products);
      }
    );
  this.productService.getProductsFromDB();
  }

  showCategories(products : Product[]){
    this.myCategories = "<div>";
    var categories = [];
    var cat = document.getElementById("cats");
    cat.innerHTML = "";
    for(var i = 0; i < products.length ; i++ ){
      if(categories.indexOf(products[i].categoria) < 0){
        categories.push(products[i].categoria);
        this.myCategories += (`<button class ="btn btn-link" (click) ="searchCategory('${products[i].categoria}')"> ${products[i].categoria} </button><br>`);
      }
    }
    this.myCategories = this.myCategories + "</div>";
    cat.innerHTML += this.myCategories;
  }

  showBrands(products : Product[]){
    this.myBrands = "<div>";
    var brands = [];
    var brand = document.getElementById("brands");
    brand.innerHTML = "";
    for(var i = 0; i < products.length ; i++ ){
      if(brands.indexOf(products[i].marca) < 0){
        brands.push(products[i].marca);
        this.myBrands += (`<button class ="btn btn-link" (click) ="searchBrand('${products[i].categoria}')"> ${products[i].marca} </button><br>`);
      }
    }
    this.myBrands = this.myBrands + "</div>";
    brand.innerHTML += this.myBrands;
  }

  searchCategory(productCat: string){
    var results = [];
    for(var i=0; i< this.products.length; i++){ 
        var prod = this.products[i];
        if(prod.categoria.indexOf(productCat)>-1){
            results.push(prod);
            console.log(prod);
        }
        for(let i=results.length-1;i>=0;i--)
        this.products.splice(results[i],1);
    }
   // displayItems(results);
  }

}
