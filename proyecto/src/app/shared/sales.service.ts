import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { SalesManageService } from './salesManage.service';
import { Sales } from './sales.model';

@Injectable()
export class SalesService{
    constructor(private http: Http, 
        private authService: AuthService,
        private saleManageService: SalesManageService){
    }

    API_URI = 'https://labcel-e45e9.firebaseio.com/';

    getSalesFromDB(){
        const token = this.authService.getToken();
        this.http.get(this.API_URI + 'ventas.json?auth='+ token)
        .map(
            (response: Response) => {
                const sales: Sales[] = response.json();
                console.log(sales);
                return sales;
            }
        )
        .subscribe(
            (sales: Sales[]) => {
                this.saleManageService.setSales(sales);
            }
        );
    }

    saveSalesToDB(){
        const token = this.authService.getToken();
        return this.http.put(this.API_URI + 'ventas.json?auth=' + token, this.saleManageService.getSales())
        .subscribe(
        (response: Response)=>{
            console.log(response);
            
            },
            err => console.log(err)
        );
    }

    updateItem(id:string|number, updatedItem:Sales){
     return this.http.put(`${this.API_URI}ventas/${id}`,updatedItem);
    }

    getProductfromDB(id: string){
        return this.http.get(`${this.API_URI}item/${id}`);
    }

    deleteItem(id:string){
        return this.http.delete(`${this.API_URI}item/${id}`);
    }

}