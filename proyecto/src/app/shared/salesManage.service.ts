import { Injectable } from '@angular/core';
import { Sales } from './sales.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SalesManageService{

    productChanged = new Subject<Sales[]>();
    private sales: Sales[] = [
        new Sales('', 0, '', '', 0 
        )
    ];

    constructor(private router: Router){}

    setProducts(sales: Sales[]){
        this.sales = sales;
        if(this.sales)
            this.productChanged.next(this.sales);
    }

    setProduct(sale: Sales){
        this.sales.push(sale);
        this.productChanged.next(this.sales.slice());
    }

    getProducts(){
        return this.sales;
    }
    getProduct(id: number){
        return this.sales[id];
    }

    addProduct(sale: Sales) {
        this.sales.push(sale);
        this.productChanged.next(this.sales.slice());
    }
    
    updateProduct(index: number, newSale: Sales) {
        this.sales[index] = newSale;
        this.productChanged.next(this.sales.slice());
    }
}