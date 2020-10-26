import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  pathname: string;
  circleOne: string;
  circleTwo: string;

  
  

  firstCircle(){
     if(window.location.pathname === '/delivery-info' || window.location.pathname === '/order-overview' || window.location.pathname === '/confirmation'){
      return '#32936f'
    } else{
      return '#bcbcbc'
    }
  }
  secondCircle(){
     if(window.location.pathname === '/order-overview' || window.location.pathname === '/confirmation' ){
      return '#32936f'
    } else{
      return '#bcbcbc'
    }
  }
  thirdCircle(){
     if(window.location.pathname === '/confirmation'){
      return '#32936f'
    } else{
      return '#bcbcbc'
    }
  }


 

  constructor() { }

  ngOnInit() {
  }

}
