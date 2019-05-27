import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterProductComponent } from './menu/register-product/register-product.component';
import { RegisterUserComponent } from './menu/register-user/register-user.component';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './menu/sales/sales/sales.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path: 'register-product', component: RegisterProductComponent, canActivate: [AuthGuard]},
  {path: 'register-user', component: RegisterUserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'edit-product', redirectTo: '/register-product'},
  {path: 'edit-user', redirectTo: '/register-user'},
  {path: 'sales', component: SalesComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

