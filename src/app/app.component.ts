import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SouperHealthy';
  pathname: string;



  constructor(public router: Router,) {
    
   

  }

   ngOnInit() {
    this.pathname = window.location.pathname; 
  } 
 
}