import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductManageService } from 'src/app/shared/productManage.service';
import { SalesManageService } from 'src/app/shared/salesManage.service';
import { Sales } from 'src/app/shared/sales.model';
import { SalesService } from 'src/app/shared/sales.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor(private router: Router,
              private productManageService: ProductManageService,
              private saleMService: SalesManageService,
              private saleService: SalesService){}

  ngOnInit() {
  }

  onEditProduct() {
    
    this.router.navigate([this.index + '/edit-product']);
  }

  newSale(){
    this.saleMService.addSale(this.product, 0);
    this.saleService.saveSalesToDB();
  }

  newWholesale(){
    this.saleMService.addSale(this.product, 1);
    this.saleService.saveSalesToDB();
  }

}
