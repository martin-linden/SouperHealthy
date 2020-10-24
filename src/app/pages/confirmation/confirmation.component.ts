import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoupsStoreService } from '../../soups-store.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router, public soupsStore: SoupsStoreService) { }

  ngOnInit() {
  }

}
