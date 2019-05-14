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


    constructor(private router: Router,
                private route: ActivatedRoute){}

    setProducts(products: Product[]){
        this.products = products;
        if(this.products)
            this.productChanged.next(this.products);
        this.router.navigate(['/home']);
    }

    setProduct(product: Product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }
    getProduct(id: number){
        return this.products[id];
    }

}