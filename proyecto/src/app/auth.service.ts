import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/api';
  token;

  private isloggedIn;
  public userLogged: User;  constructor(private http: HttpClient,private router:Router ) { 
    this.isloggedIn = false; 
  }
  
  login(user:string,password:string){
    this.http.post(this.uri + '/auth', {nombre:user,pass:password})
    .subscribe((resp:any)=>{
      localStorage.setItem('auth_token',resp.token);
      this.router.navigate(['home']);
    });
  }
  
  setUserLoggedIn(user:User){
    this.isloggedIn = true;
    this. userLogged = user;
    localStorage.setItem('currentUser',JSON.stringify(user.nombre));
  }

  getUserLogged(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    localStorage.removeItem('token');
  }

  public get logIn():boolean{
    return (localStorage.getItem('token') !== null);
  }
  
}

