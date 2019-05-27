import { Component, OnInit, Input } from '@angular/core';
import { SalesManageService } from 'src/app/shared/salesManage.service';
import { SalesService } from 'src/app/shared/sales.service';
import { Sales } from 'src/app/shared/sales.model';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { Subscription } from 'rxjs';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @Input() product: Product;
  sales: Sales[];
  subscription: Subscription;
  constructor(private salesManageService: SalesManageService,
              private salesService: SalesService,
              private route: Router) { }

  sale: Sales = {
    nombre: '',
    precio: 0,
    marca: '',
    cantidad: 0,
    total: 0
  };
  total: number = 0;

  ngOnInit() {
    this.subscription = this.salesManageService.saleChanged
    .subscribe(
      (sales: Sales[]) => {
        this.sales = sales;
        console.log(this.sales);
        this.sales = this.getTotalInd(this.sales);
        this.getTotal(this.sales);
        
      }
    );
    this.salesService.getSalesFromDB();
  }
  
  saveSale(){
    this.salesService.saveSalesToDB();
  }

  saveSales(){
    this.salesManageService.setSales(this.sales);
    this.saveSale();
    this.route.navigate(['home']);
  }

  getTotal(sales: Sales[]){
    for(var i = 0; i< sales.length; i++){
      this.total += sales[i].total;
    }
    console.log(this.total);
  }
  
  getTotalInd(sales: Sales[]){
    for(var i = 0; i< sales.length; i++){
      sales[i].total = sales[i].precio * sales[i].cantidad;
    }
    return sales;
  }
}
