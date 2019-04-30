import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service'
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   items: any = [];
  constructor(private itemService: ItemService) {
    
   }

  ngOnInit() {
     this.getItems();
  }

  getItems(){
    this.itemService.getItems().subscribe(
      res => {
           this.items = res;
      },
      err => console.log(err)
    );
  }
  
}
