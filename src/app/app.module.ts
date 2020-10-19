import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { SoupListComponent } from './components/soup-list/soup-list.component';
import { SoupCardComponent } from './components/soup-card/soup-card.component';
import { SoupComponent } from './pages/soup/soup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DeliveryInfoComponent } from './pages/delivery-info/delivery-info.component';
import { OrderOverviewComponent } from './pages/order-overview/order-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    SupportComponent,
    SoupListComponent,
    SoupCardComponent,
    SoupComponent,
    ShoppingCartComponent,
    SignInComponent,
    DeliveryInfoComponent,
    OrderOverviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
