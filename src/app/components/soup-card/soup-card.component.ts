import { Component, OnInit, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SoupsStoreService } from '../../soups-store.service';

@Component({
  selector: 'app-soup-card',
  templateUrl: './soup-card.component.html',
  styleUrls: ['./soup-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoupCardComponent implements OnInit {

  @Input() soup: any;
 /*  @Input() receivedParentMessage: string; */
  //@Output() notify: EventEmitter<any> = new EventEmitter<any>()


  onCardClicked() {
    //this.notify.emit(this.soup.slug + " was clicked")
    /* console.log(this.soup.slug) */
    this.router.navigate(['/soup', this.soup.slug]); // kolla om +1 är klickat, isf gör något annat :) 

  }


  addSoups() {
    /* alert('+1 was clicked') */
    console.log("AddSoups inside soup-card" + this.soup.slug)
    this.soupsStore.addSoup(this.soup.slug)
  //   // this.amount = this.soupsStore.addSoup(Object.assign({amount: 1}, this.soup.slug))
    
  }

 
  constructor(public router: Router, public soupsStore: SoupsStoreService) {
   

  }
  ngOnInit() {

  }

}
