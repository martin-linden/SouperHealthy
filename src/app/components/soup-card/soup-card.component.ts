import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/soup', this.soup.slug]); // kolla om +1 är klickat, isf gör ntå annat :)

  }

  constructor(private router: Router) {
  }
  ngOnInit() {

  }

}
