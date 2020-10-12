import { Component, OnInit } from '@angular/core';

import { SoupsStoreService } from '../../soups-store.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  constructor(public soupsStore: SoupsStoreService) { }

  ngOnInit() {
    // här kan du göra saker som körs 1  gång verkar det som
  }

}
