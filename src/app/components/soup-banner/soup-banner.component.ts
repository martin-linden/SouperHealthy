import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soup-banner',
  templateUrl: './soup-banner.component.html',
  styleUrls: ['./soup-banner.component.scss']
})
export class SoupBannerComponent implements OnInit {

  @Input() amount: number;
  @Input() soup: any;
  cost: number;

  totalCost(){
    this.cost = this.amount * this.soup.price
    return this.cost
  }

  constructor() { }

  ngOnInit() {
    
  }

}
