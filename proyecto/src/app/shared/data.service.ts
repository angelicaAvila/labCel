import {Injectable} from '@angular/core'
import { Http } from '@angular/http'

@Injectable()

export class dataService{
    constructor (){}

    storeData(){
       // this.http.post('https://labcel-e45e9.firebaseio.com/product.json');
       //falta agregar por parametro los datos del JSON de registerProduct
    }
}