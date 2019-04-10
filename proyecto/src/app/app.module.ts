import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { LogoutComponent } from './menu/top-menu/logout/logout.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TopMenuComponent,
    routingComponents,
    DashboardComponent,
    ProductsComponent,
    RegisterProductComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
