import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Routes } from '@angular/router';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthGuardService} from './guards/auth-guard.service'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { LogoutComponent } from './menu/top-menu/logout/logout.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { SearchComponent } from './dashboard/search/search.component';
import { EditProductComponent } from './menu/edit-product/edit-product.component';
import { DataService } from './shared/data.service';
import { ProductService } from './shared/product.service';
//import { userService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TopMenuComponent,
    routingComponents,
    DashboardComponent,
    ProductsComponent,
    RegisterProductComponent,
    RegisterUserComponent,
    SearchComponent,
    EditProductComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: function tokenGetter(){
          return localStorage.getItem('access_token');},
          whitelistedDomains: ['https://localhost:4200'],
          blacklistedRoutes: ['https://localhost:4200/api/auth']
        }
      })  
  ],
  providers: [/*userService,*/ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
