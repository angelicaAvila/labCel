import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Product } from './product.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ProductService{
    productChanged = new Subject<Product[]>();
    private products: Product[];
    API_URI = 'https://labcel-e45e9.firebaseio.com/';
    constructor(private http: Http, 
                private authService: AuthService,
                private route: Router){}

    getProductsFromDB(){
      const token = this.authService.getToken();
      this.http.get(this.API_URI + 'products.json?auth='+ token)
      .map(
        (response: Response) => {
          const products: Product[] = response.json();
          console.log(products);
          return products;
        }
      )
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
      return this.products;
    }

    saveProductToDB(product: Product){
        const token = this.authService.getToken();
        this.http.post(this.API_URI + 'products.json?auth=' + token, product)
        .map(
            (response: Response) => {
                console.log (response.json);
                const res = response.json;
                return res;
            }
        ).subscribe(
            res=>{
              console.log(res);
              this.route.navigate(['/home']);
            },
            err => console.log(err)
          );
    }

    updateItem(id:string|number, updatedItem:Product){
        return this.http.put(`${this.API_URI}product/${id}`,updatedItem);
    }

    getProductfromDB(id: string){
        return this.http.get(`${this.API_URI}item/${id}`);
    }
    
    deleteItem(id:string){
          return this.http.delete(`${this.API_URI}item/${id}`);
    }

    setProducts(products: Product[]){
      //  this.product.products = products;
    }
    getProducts(){
        return this.products.slice();
    }
    getProduct(id: number){
        return this.products[id];
    }
    
}