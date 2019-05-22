import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myCategories: string = "<div>";
  myBrands: string = "<div>";

  constructor() { }

  ngOnInit() {
  }

  showCategories(products : Product[]){
    var categories = [];
    for(var i = 0; i < products.length ; i++ ){
      if(categories.indexOf(products[i].categoria) < 0){
        categories.push(products[i].categoria);
        console.log(i);
        this.myCategories += (`<button class ="btn-info"> ${products[i].categoria} </button><br>`);
      }
    }
    this.myCategories = this.myCategories + "</div>";
    console.log(categories);

  }

  showBrands(products : Product[]){
    var brands = [];
    for(var i = 0; i < products.length ; i++ ){
      if(brands.indexOf(products[i].marca) < 0){
        brands.push(products[i].marca);

        this.myCategories += (`<button class ="btn-info"> ${products[i].marca} </button><br>`);
      }
    }
    this.myBrands = this.myBrands + "</div>";
    console.log(brands);
  }

}
