import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private isloggedIn;
  // public userLogged: User;
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { 
    // this.isloggedIn = false; 
  }

  // setUserLoggedIn(user:User){
  //   this.isloggedIn = true;
  //   this. userLogged = user;
  //   localStorage.setItem('currentUser',JSON.stringify(user.nombre));
  // }

  // getUserLogged(){
  //   return JSON.parse(localStorage.getItem('currentUser'));
  // }

  getUsers(){
    return this.http.get(`${this.API_URI}/user`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/user/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/user`,user);
  }

  deleteUser(id:string){
      return this.http.delete(`${this.API_URI}/user/${id}`);
  }

  updateUser(id:string|number,updatedUser:User){
      return this.http.put(`${this.API_URI}/user/${id}`,updatedUser);
  }

  
}
