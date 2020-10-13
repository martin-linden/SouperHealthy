import { Component, OnInit, Input } from '@angular/core';
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




  onNotified(message: string) {
    this.title = message
  }



  constructor() {
    this.soups = SoupJson;
    /* this.soups = [{
      slug: 'soup1',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: 'soup2',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: 'soup3',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },
    {
      slug: 'soup4',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: 'tomatsoppa1',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: 'tomatsoppa2',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },
    {
      slug: 'tomatsoppa3',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: 'tomatsoppa4',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: 'tomatsoppa5',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },

    ] */
  }
  ngOnInit() {
  }


}
