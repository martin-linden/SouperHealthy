import { Component, OnInit } from '@angular/core';
import SoupJson from '../../../assets/soups.json';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {

  soups: any

  constructor() { 
    this.soups = SoupJson;
  }

  ngOnInit() {
  }

}
