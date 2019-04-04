import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopMenuComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
