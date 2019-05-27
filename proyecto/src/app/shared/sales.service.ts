import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { ProductManageService } from './productManage.service';
import { Product } from './product.model';

@Injectable()
export class SalesService{
    constructor(private http: Http, 
        private authService: AuthService,
        private productManageService: ProductManageService){
    }

    API_URI = 'https://labcel-e45e9.firebaseio.com/';

    getSalesFromDB(){
        const token = this.authService.getToken();
        this.http.get(this.API_URI + 'ventas.json?auth='+ token)
        .map(
            (response: Response) => {
                const products: Product[] = response.json();
                console.log(products);
                return products;
            }
        )
        .subscribe(
            (products: Product[]) => {
            //    this.productManageService.setProducts(products);
            }
        );
    }

    saveSalesToDB(){
        const token = this.authService.getToken();
        return this.http.put(this.API_URI + 'ventas.json?auth=' + token, this.productManageService.getProducts())
        .subscribe(
        (response: Response)=>{
            console.log(response);
            
            },
            err => console.log(err)
        );
    }

    updateItem(id:string|number, updatedItem:Product){
     return this.http.put(`${this.API_URI}ventas/${id}`,updatedItem);
    }

    getProductfromDB(id: string){
        return this.http.get(`${this.API_URI}item/${id}`);
    }

    deleteItem(id:string){
        return this.http.delete(`${this.API_URI}item/${id}`);
    }

}