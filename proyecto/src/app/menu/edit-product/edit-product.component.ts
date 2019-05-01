import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.product = this.productService.getProduct(this.id);
        }
      );
  }

  onSubmit(){
    
  }

}
