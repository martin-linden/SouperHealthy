import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(public router: Router) { }

    
  submit(value){
    // om hämtas i butiken är vald
    localStorage.setItem('address',JSON.stringify(value));
  }

  ngOnInit() {
  }

}
