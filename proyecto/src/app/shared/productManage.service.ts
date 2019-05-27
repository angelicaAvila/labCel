import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ProductManageService{

    productChanged = new Subject<Product[]>();
    private products: Product[] = [
        new Product(
            'articulo de prueba',
            'otros',
            0, 0, 0,
            'generico', 1, ''
        )
    ];

    constructor(private router: Router){}

    setProducts(products: Product[]){
        this.products = products;
        if(this.products)
            this.productChanged.next(this.products);
    }

    setProduct(product: Product){
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }

    getProducts(){
        return this.products;
    }
    getProduct(id: number){
        return this.products[id];
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }
    
    updateProduct(index: number, newProduct: Product) {
        this.products[index] = newProduct;
        this.productChanged.next(this.products.slice());
    }
}