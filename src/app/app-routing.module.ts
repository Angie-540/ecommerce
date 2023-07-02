import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: "**",
    component: HomeComponent
  },
  {
    path:"products",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "sale",
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
