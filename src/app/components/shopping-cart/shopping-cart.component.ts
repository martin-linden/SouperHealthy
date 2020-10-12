import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  messageToSend: string = 'sent from shopping cart component';

  /* 
    onButtonClicked() {
      alert('+1 was clicked')
    } */


  constructor() { }

  ngOnInit() {
  }

}
