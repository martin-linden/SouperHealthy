import { Component, OnInit } from '@angular/core';
import SoupJson from '../../../assets/soups.json';
import { Router } from '@angular/router';
import { SoupsStoreService } from '../../soups-store.service';

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

  constructor(private router: Router, public soupsStore: SoupsStoreService) { 
    this.soups = SoupJson;
    this.store = soupsStore.soups
    this.localData = JSON.parse(localStorage.getItem('data'))
    let today = new Date()

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    this.today = dd + '/' + mm + '/' + yyyy 
    console.log(today)
  }


  submitReceipt(){
   


    let receipt = { 
      'adress': document.getElementById("adress").innerHTML,
      'totalSum': document.getElementById("totalSum").innerHTML,
      'message' : document.getElementById("message").innerHTML,
      'date' : document.getElementById("date").innerHTML,
      'deliveryOption': document.getElementById("deliveryOption").innerHTML,
      'option': document.getElementById("option").innerHTML, 
      'name': document.getElementById("name").innerHTML, 
  };
    localStorage.setItem('receipt',JSON.stringify(receipt));
  }


  removeLocal(){
    localStorage.clear()
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
   
    /*   var deliveryInfo = JSON.parse(localStorage.getItem('data'))
      console.log(deliveryInfo)
      return deliveryInfo */
    
  }

}
