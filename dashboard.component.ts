import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CastExpr } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myCategories: string;
  myBrands: string;
  public isCollapsedCats =true;
  public isCollapsedBrands =true;
  constructor() { }

  ngOnInit() {
  }

  showCategories(products : Product[]){
    var categories = [];
    this.myCategories ="<div>"
    // var n = 0;
    var cat = document.getElementById("cats");
    cat.innerHTML="";
    // while(cat.firstChild) cat.removeChild(cat.firstChild);
    for(var i = 0; i < products.length ; i++ ){
      if(categories.indexOf(products[i].categoria) < 0){
        categories.push(products[i].categoria);
        // console.log(i);
        // var 
        this.myCategories += (`<button class ="btn-info" onClick="alert('${products[i].categoria}')"> ${products[i].categoria} </button><br>`);
        //(click) = "search("' + products[i].categoria + '")"
        // n++;
      }
    }
    this.myCategories = this.myCategories + "</div>";
    // console.log(this.myCategories);
    cat.innerHTML += this.myCategories;
    // console.log(categories);
  }

  showBrands(products : Product[]){
    var brands = [];
    this.myBrands ="<div>";
    var brand = document.getElementById("brands");
    brand.innerHTML ="";
    // var n=0;

    for(var i = 0; i < products.length ; i++ ){
      if(brands.indexOf(products[i].marca) < 0){
        brands.push(products[i].marca);
        // console.log(i);
        this.myBrands += (`<button class ="btn-info"> ${products[i].marca} </button><br>`);
        //(click) = "search("' + products[i].categoria + '")"
        // n++;
      }
    }
    this.myBrands = this.myBrands + "</div>";
    // console.log(this.myCategories);
    brand.innerHTML += this.myBrands;
    // console.log(brands);
  }

  hello(){
    alert("hola");
  }
  showElements(text:string,products: Product[]){
      for(let i=0;i<products.length;i++){
        if(products[i].categoria==text)
          console.log(text);
      }
  }
}
