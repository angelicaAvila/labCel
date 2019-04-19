import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { LogoutComponent } from './menu/top-menu/logOut/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'register-product', component: RegisterProductComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: '', component: LoginComponent},
  {path: 'items/edit/:id', component:RegisterProductComponent },
  {path: 'users/edit/:id', component:RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= []
