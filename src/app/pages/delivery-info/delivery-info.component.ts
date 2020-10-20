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
  localFormData: any;
  
  submit(value){
    localStorage.setItem('data',JSON.stringify(value));
  }

  constructor(private router: Router,) {
    let localFormData = this.localData = JSON.parse(localStorage.getItem('data'))
    console.log(this.localData)
    
    if(!localFormData){
      this.localFormData = ''
    }else{
      this.localFormData = localFormData
    }
   }


  ngOnInit() {
   
  }

}
