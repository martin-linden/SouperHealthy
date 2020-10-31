import { Component, OnInit } from '@angular/core';
import SoupJson from '../../../assets/soups.json';
import { Router } from '@angular/router';
import { SoupsStoreService } from '../../soups-store.service';
import { element } from 'protractor';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {

  soups: any
  store: any
  localData: any
  time: any
  today: string
  addressData: any;
  kitchenNotified: any;

  constructor(public router: Router, public soupsStore: SoupsStoreService) { 
    this.soups = SoupJson;
    this.store = soupsStore.soups
   /*  this.localData = JSON.parse(sessionStorage.getItem('data')) */
   this.localData = JSON.parse(localStorage.getItem('data'));
   this.addressData = JSON.parse(localStorage.getItem('address'));


   console.log(this.localData)
    let today = new Date()

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    this.today = dd + '/' + mm + '/' + yyyy 
    console.log(today)
  }


  submitReceipt(){
   
/* 
    let receiptFields = ['adress', 'totalSum', 'message', 'date', 'deliveryOption', 'option', 'name'];
    let receipt = receiptFields.reduce((acc, key) => {
      acc[key] = document.getElementById(key).innerHTML;
      return acc
    }, {});
 */
    sessionStorage.setItem('receipt',JSON.stringify({ cart: this.store, info: this.localData, totalSum: this.calcTotalSum(), dateToday: this.today}));
  }


  removeLocal(){
    localStorage.removeItem('data')
  }

  removeAllSoups(){
    console.log(this.store)
    let totalAmount = this.store;
    totalAmount.forEach(element => element.amount = 0)
    console.log(this.store) 
}

updateSoup(){
  localStorage.setItem('update', 'updated')
}
  
  



  calcTotalSum() {
    return this.store.reduce((acc, item) => {
      const price = this.soups.find(soup => soup.slug == item.title).price 
      /* if (!price) {
        return;
      } */
      /* console.log("acc: " + acc)
      console.log("price: " + price)
      console.log("item.price" + item.amount) */
      return acc + (Number(price) * Number(item.amount));
    }, 0);
  }
  ngOnInit() {
   
    window.scrollTo(0 , 0)
    
  }

}
