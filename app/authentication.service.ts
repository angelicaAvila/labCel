import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {aUser} from './user';
import { Observable } from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient ) { }

  getUser():Observable<aUser[]> {
      return this.http.get<aUser[]>('http://localhost:3000/getData');
  }
}
