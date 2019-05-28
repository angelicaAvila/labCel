import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service'; 
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { ProductService } from './shared/product.service';
import { ProductManageService } from './shared/productManage.service';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/products/product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SalesComponent } from './menu/sales/sales/sales.component';
import { SalesService } from './shared/sales.service';
import { SalesManageService } from './shared/salesManage.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TopMenuComponent,
    RegisterProductComponent,
    RegisterUserComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SalesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [DashboardComponent, ProductComponent,
              ProductService, AuthGuard, 
              AuthService, ProductManageService, 
              SalesService, SalesManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
