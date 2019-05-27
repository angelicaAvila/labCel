import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductManageService } from 'src/app/shared/productManage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productManageService: ProductManageService){}

  ngOnInit() {
  }

  onEditProduct() {
    this.router.navigate(['/edit-product']);
  }

  newSale(){
    this.router.navigate(['new-sale']);
  }

}
