import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SoupJson from '../../../assets/soups.json';
import { SoupsStoreService } from '../../soups-store.service';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.scss']
})



export class SoupComponent implements OnInit, OnDestroy {

  slug: any;
  soup: any;
  private sub: any;
  soups: any;
  amount: number;
  cartSoup: any; 

  addSoups() {
    /* alert('+1 was clicked') */
    this.amount = this.soupsStore.addSoup(this.soup.slug)
  
      // this.amount = this.soupsStore.addSoup(Object.assign({amount: 1}, this.soup.slug))
  
    // todo: add force showing top thing with cart
  }
  
  removeSoups() {
    /* alert('+1 was clicked') */
    this.amount = this.soupsStore.removeSoup(this.soup.slug)
    console.log(this.soupsStore.soups)
  }


  constructor(private route: ActivatedRoute, public soupsStore: SoupsStoreService) {
    this.soups = SoupJson;

  }




  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      /* console.log(params) */
      this.slug = params['slug']; // (+) converts string 'id' to a number
      this.soup = this.soups.find(soup => soup.slug == this.slug)
      this.cartSoup = this.soupsStore.soups.find(soup => soup.title == this.slug)
      this.amount = this.cartSoup ? this.cartSoup.amount : 0;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
