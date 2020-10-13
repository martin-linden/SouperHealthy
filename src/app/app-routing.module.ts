import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SoupComponent } from './pages/soup/soup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'soup/:slug', component: SoupComponent },
  // { path: '**', component: PageNotFoundComponent },  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
