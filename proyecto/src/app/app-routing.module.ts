import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Inicio/inicio.component';
import{RegisterProductComponent} from './register-product/register-product.component';
import { LoginComponent } from './menu/top-menu/login/login.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'register', component: RegisterProductComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [InicioComponent,RegisterProductComponent]
