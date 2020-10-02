import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { SoupListComponent } from './components/soup-list/soup-list.component';
import { TestComponent } from './components/test/test.component';
import { SingleSoupComponent } from './components/single-soup/single-soup.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    SupportComponent,
    SoupListComponent,
    TestComponent,
    SingleSoupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
