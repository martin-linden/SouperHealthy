import { Component, OnInit, Input } from '@angular/core';
import { SoupsStoreService } from '../../soups-store.service';
import SoupJson from '../../../assets/soups.json';



@Component({
  selector: 'app-soup-list',
  templateUrl: './soup-list.component.html',
  styleUrls: ['./soup-list.component.scss']
})
export class SoupListComponent implements OnInit {

  /*  inputValue: string = 'hello world hdshuifufchusd'
   soup: any */
  soups: any
  title: string
  messageToSend: string = 'sent from parent';
  store: any



   onNotified(message: string) {
    this.title = message
  } 



  constructor(public soupsStore: SoupsStoreService) {
    this.soups = SoupJson;
    this.store = soupsStore.soups
    
  }
  ngOnInit() {
  }


}
