import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-soup',
  templateUrl: './single-soup.component.html',
  styleUrls: ['./single-soup.component.scss']
})
export class SingleSoupComponent implements OnInit {

  @Input() soup: any

  constructor() { }

  ngOnInit() {
  }

}
