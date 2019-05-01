import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
  }

  search(){
    this.productService.getProducts();
  }

}
