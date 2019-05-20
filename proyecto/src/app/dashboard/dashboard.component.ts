import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myCategories: string = "<div>";

  constructor() { }

  ngOnInit() {
  }

  showCategories(products : Product[]){
    var categories = [];
    for(var i = 0; i < products.length ; i++ ){
      if(categories.indexOf(products[i].categoria) < 0){
        categories.push(products[i].categoria);
        console.log(i);
        this.myCategories = this.myCategories + "<button class = " +"\"button-link\"" + "type = \"button\">" 
        + products[i].categoria + "</button>";
        //(click) = "search("' + products[i].categoria + '")"
      }
    }
    this.myCategories = this.myCategories + "</div>";
    console.log(categories);
  }

}
