import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Product } from './product.model';
import { AuthService } from '../auth/auth.service';
import { ProductManageService } from './productManage.service';

@Injectable()
export class ProductService{
    constructor(private http: Http, 
                private authService: AuthService,
                private productManageService: ProductManageService){
    }
    
    API_URI = 'https://labcel-e45e9.firebaseio.com/';

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
          this.productManageService.setProducts(products);
        }
      );
    }

    saveProductToDB(){
        const token = this.authService.getToken();
        return this.http.put(this.API_URI + 'products.json?auth=' + token, this.productManageService.getProducts())
        .subscribe(
          (response: Response)=>{
              console.log(response);
              
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
    
}