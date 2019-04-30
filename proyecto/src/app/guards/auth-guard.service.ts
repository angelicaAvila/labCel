import { Injectable } from '@angular/core';
import {AuthService} from '../auth.service';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router,Route} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.logIn ){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

