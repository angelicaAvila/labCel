import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './menu/edit-product/edit-product.component'
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path: 'register-product', component: RegisterProductComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: ':nombre/edit-product', component: EditProductComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= []
