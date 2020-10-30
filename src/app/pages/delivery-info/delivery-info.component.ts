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

  /* CheckedValue: boolean */



  
  submit(value){
    // om hämtas i butiken är vald
    localStorage.setItem('data',JSON.stringify(value));
  }

 

changeSelect(value) {
  console.log(value);
}


  constructor(public router: Router,) {
  let localFormData = JSON.parse(localStorage.getItem('data'))
    console.log(this.localData) 
    
    if(!localFormData){
      this.localFormData = ''
    }else{
      this.localFormData = localFormData
      console.log(this.localFormData)
    }  


    
  }



  /*   if(!localFormData){
      this.localFormData = false
      console.log(this.localFormData)
    }
  
    
   }
 */
  



  ngOnInit() {
    window.scrollTo(0 , 0)
    this.submit(this.value)
  }

}
