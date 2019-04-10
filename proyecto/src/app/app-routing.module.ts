import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './menu/top-menu/login/login.component';
import { LogoutComponent } from './menu/top-menu/logOut/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= []
