import { Injectable } from '@angular/core';
import { Sales } from './sales.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from './product.model';
import { SalesService } from './sales.service';

@Injectable()
export class SalesManageService{

    saleChanged = new Subject<Sales[]>();
    private sales: Sales[] = [
        new Sales('', 0, '', 0
        )
    ];
    private product: Product;

    constructor(private router: Router){}

    setSales(sales: Sales[]){
        this.sales = sales;
        if(this.sales)
            this.saleChanged.next(this.sales);
    }

    setSale(sale: Sales){
        this.sales.push(sale);
        this.saleChanged.next(this.sales.slice());
    }

    getSales(){
        return this.sales;
    }
    getSale(id: number){
        return this.sales[id];
    }

    addSale(product: Product, mayoreo: number) {
        if(mayoreo > 0){
            var sale = new Sales(product.nombre,product.precioMayoreo,product.marca,1);
            sale.tipoVenta = 'Mayoreo';
        }
        else{
            var sale = new Sales(product.nombre,product.precio,product.marca,1);
        }
        this.sales.push(sale);
        this.saleChanged.next(this.sales.slice());
    }
    
    updateSale(index: number, newSale: Sales) {
        this.sales[index] = newSale;
        this.saleChanged.next(this.sales.slice());
    }
}