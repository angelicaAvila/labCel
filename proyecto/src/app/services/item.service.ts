import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Item} from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(`${this.API_URI}/item`);
  }

  getItem(id: string){
    return this.http.get(`${this.API_URI}/item/${id}`);
  }

  saveItem(user: Item){
    return this.http.post(`${this.API_URI}/item`,user);
  }

  deleteItem(id:string){
      return this.http.delete(`${this.API_URI}/item/${id}`);
  }

  updateItem(id:string|number,updatedItem:Item){
      return this.http.put(`${this.API_URI}/item/${id}`,updatedItem);
  }

  
}
