import { Component, OnInit } from '@angular/core';
/* import {image} from '../../../assets/images/cart.svg' */

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

  onNotified(message: string) {
    this.title = message
  }

  constructor() {
    this.soups = [{
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Tomatsoppa',
      text: 'Ät dig i form med våran supertomatsoppa! 100% god!',
      minutes: 20,
      price: 89,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Skärgårdssoppa',
      text: 'Krämig, smakrik soppa med smak av havet.',
      minutes: 20,
      price: 90,
    },
    {
      slug: '/tomatsoppa',
      img: '../../../assets/images/soups/tomato-soup.jpg',
      name: 'Linsssoppa',
      text: 'För den jordnära. Mmmm potatis.',
      minutes: 30,
      price: 80,
    },

    ]

    /*  this.soups = ["tomato", "carlic", "potato"] */
  }
  ngOnInit() {
  }

}
