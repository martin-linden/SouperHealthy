import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-soup-card',
  templateUrl: './soup-card.component.html',
  styleUrls: ['./soup-card.component.scss']
})
export class SoupCardComponent implements OnInit {

  @Input() soup: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>()

  onClicked() {
    this.notify.emit(this.soup.slug + " was clicked")
    console.log(this.soup.slug)
  }

  constructor() { }

  ngOnInit() {

  }

}
