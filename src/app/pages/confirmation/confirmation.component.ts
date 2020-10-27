import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoupsStoreService } from '../../soups-store.service';
import SoupJson from '../../../assets/soups.json';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  
  store: any
  cartData: any;
  infoData: any;
  totalSum: any;


  constructor(private router: Router, public soupsStore: SoupsStoreService) {
    
    this.store = soupsStore.soups
    
    this.totalSum = JSON.parse(localStorage.getItem('receipt'))
    this.cartData = JSON.parse(localStorage.getItem('receipt')).cart
    this.infoData = JSON.parse(localStorage.getItem('receipt')).info

 
    console.log(this.cartData)
    console.log(this.infoData)

    
   }

  ngOnInit() {
    window.scrollTo(0 , 0)
  }

}
