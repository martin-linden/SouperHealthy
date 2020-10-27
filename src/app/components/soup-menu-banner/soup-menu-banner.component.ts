import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soup-menu-banner',
  templateUrl: './soup-menu-banner.component.html',
  styleUrls: ['./soup-menu-banner.component.scss']
})
export class SoupMenuBannerComponent implements OnInit {

  @Input() store: any;
  @Input() soups: any;

  calcTotalSum() {
    return this.store.reduce((acc, item) => {
      const price = this.soups.find(soup => soup.slug == item.title).price 
      /* if (!price) {
        return;
      } */
      /* console.log("acc: " + acc)
      console.log("price: " + price)
      console.log("item.price" + item.amount) */
      return acc + (Number(price) * Number(item.amount));
    }, 0);
  }

  getCartAmount() {
    return this.store.reduce((acc, item) => (acc += item.amount), 0)
  }


  constructor() { }

  ngOnInit() {
  }

}
