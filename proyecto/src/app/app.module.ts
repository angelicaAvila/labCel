import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { SearchComponent } from './dashboard/search/search.component';
import { EditProductComponent } from './menu/edit-product/edit-product.component';
import { ProductService } from './shared/product.service';
import { FrontPageComponent } from './dashboard/front-page/front-page.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/products/product/product/product.component';
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
    EditProductComponent,
    FrontPageComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [/*userService,*/ ProductService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
