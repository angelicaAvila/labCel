import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service'; 
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { LogoutComponent } from './menu/top-menu/logout/logout.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { EditProductComponent } from './menu/edit-product/edit-product.component';
import { ProductService } from './shared/product.service';
import { ProductManageService } from './shared/productManage.service';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/products/product/product.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    TopMenuComponent,
    RegisterProductComponent,
    RegisterUserComponent,
    EditProductComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule ,
    NgxPaginationModule
  ],
  providers: [DashboardComponent, ProductService, AuthGuard, AuthService, ProductManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
