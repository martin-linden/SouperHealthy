import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent} from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SoupComponent } from './pages/soup/soup.component';
import { DeliveryInfoComponent } from './pages/delivery-info/delivery-info.component';
import { OrderOverviewComponent } from './pages/order-overview/order-overview.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'support', component: SupportComponent },
  { path: 'soup/:slug', component: SoupComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'delivery-info', component: DeliveryInfoComponent },
  { path: 'order-overview', component: OrderOverviewComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  // { path: '**', component: PageNotFoundComponent },  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
