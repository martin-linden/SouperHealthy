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


  constructor(private router: Router, public soupsStore: SoupsStoreService) { 
    this.soups = SoupJson;
    this.store = soupsStore.soups

/*     console.log(soupsStore.soups[0].title) */

  }

  ngOnInit() {
  }

}
