import { Component, OnInit } from '@angular/core';

import { SeoService } from './seo/shared/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  seo: any;
  constructor(private seoService: SeoService) { }

  ngOnInit() {
      this.seoService.seo.subscribe(seo => {
        this.seo = seo;
      });
  }
}
