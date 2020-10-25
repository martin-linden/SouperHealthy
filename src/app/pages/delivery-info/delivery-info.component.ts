import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    localStorage.setItem('data',JSON.stringify(value));
  }
/* 
  eatInOut(){
    let checkbox = document.getElementById("delivery");
    console.log(checkbox.id)
  
    
  }
 */
 

  constructor(private router: Router,) {
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
   
  }

}
