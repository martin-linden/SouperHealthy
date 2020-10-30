import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {

  value: any
  localData: any
  localFormData: any
  testValue: boolean;
  hidden: string;
  message: string;
 

  /* CheckedValue: boolean */



  
  submit(value){
    // om hämtas i butiken är vald
    localStorage.setItem('data',JSON.stringify(value));
  }

  showMessage(){
    localStorage.setItem('message', 'message')
    this.message = localStorage.getItem('message')
  }

  show(){
    localStorage.setItem('hidden', 'hidden')
    this.hidden = localStorage.getItem('hidden')

  }

 


 
 

  constructor(public router: Router,) {
  
  }




  



  ngOnInit() {
    window.scrollTo(0 , 0)
    this.submit(this.value)
  }

}
