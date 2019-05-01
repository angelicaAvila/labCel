import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Product } from './product.model';

@Injectable()
export class ProductService{
    productChanged = new Subject<Product[]>();
    private products: Product[];
    API_URI = 'https://labcel-e45e9.firebaseio.com/';
    constructor(private http: Http){}

    getProductsFromDB(){
        this.http.get(this.API_URI + '/products.json')
        .map(
        (response: Response) => {
          const products: Product[] = response.json();
          return products;
        }
      )
      .subscribe(
        (products: Product[]) => {
          this.setProducts(products);
        }
      );
    }

    saveProductToDB(product: Product){
        this.http.post(this.API_URI, product)
        .map(
            (response: Response) => {
                console.log (response.json);
            }
        );
    }

    updateItem(id:string|number, updatedItem:Product){
        return this.http.put(`${this.API_URI}/product/${id}`,updatedItem);
    }

    getProductfromDB(id: string){
        return this.http.get(`${this.API_URI}/item/${id}`);
    }
    
    deleteItem(id:string){
          return this.http.delete(`${this.API_URI}/item/${id}`);
    }

    setProducts(products: Product[]){
        this.products = products;
    }
    getProducts(){
        return this.products.slice();
    }
    getProduct(id: number){
        return this.products[id];
    }
    saveItem(user: Product){
        return this.http.post(`${this.API_URI}/product`,user);
    }
    
}