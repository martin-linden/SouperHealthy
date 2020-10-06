import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SoupJson from '../../../assets/soups.json';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.scss']
})
export class SoupComponent implements OnInit, OnDestroy {
  slug: any;
  soup: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params)
      this.slug = params['slug']; // (+) converts string 'id' to a number
      this.soup = SoupJson.find(soup => soup.slug == this.slug)
      console.log(this.soup);
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
