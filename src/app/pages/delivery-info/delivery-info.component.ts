import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {

  value: any
  
  submit(value){
    console.log(value);
    localStorage.setItem('data',JSON.stringify(value));
  }
/* 
  navigate() {
    this.router.navigate(['/order-overview']);
  }
 */
  constructor(private router: Router,) { }

  ngOnInit() {
  }

}
