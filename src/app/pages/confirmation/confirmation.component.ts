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
  receiptData: any;
  store: any
  soupReceiptData: any;

  constructor(private router: Router, public soupsStore: SoupsStoreService) {
    this.store = soupsStore.soups
    
    this.receiptData = JSON.parse(localStorage.getItem('receipt')).receipt;
    this.soupReceiptData = JSON.parse(localStorage.getItem('receipt')).cart
    console.log(this.soupReceiptData) 

    
   }

  ngOnInit() {
    
  }

}
