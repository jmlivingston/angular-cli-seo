import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title, DOCUMENT } from '@angular/platform-browser';

import { SeoService } from './seo/shared/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seo: any;
  constructor(router: Router, seoService: SeoService, private title: Title, @Inject(DOCUMENT) private document: any) {
    router.events.subscribe(() => {
      seoService.getSeo().subscribe(seo => {
        this.seo = seo.json();
        this.createUpdateMeta('name', 'author', this.seo.author);
        this.createUpdateMeta('name', 'description', this.seo.description);
        this.createUpdateMeta('name', 'google-site-verification', this.seo.googleSiteVerification);
        this.createUpdateMeta('name', 'keywords', this.seo.keywords);
        this.createUpdateMeta('name', 'msvalidate.01', this.seo.msValidate);
        this.createUpdateMeta('name', 'twitter:description', this.seo.description);
        this.createUpdateMeta('name', 'twitter:image', this.seo.image);
        this.createUpdateMeta('name', 'twitter:title', this.seo.title);
        this.createUpdateMeta('name', 'twitter:url', this.seo.url);
        this.createUpdateMeta('property', 'fb:app_id', this.seo.fbAppId);
        this.createUpdateMeta('property', 'og:description', this.seo.description);
        this.createUpdateMeta('property', 'og:image', this.seo.image);
        this.createUpdateMeta('property', 'og:site_name', this.seo.siteName);
        this.createUpdateMeta('property', 'og:title', this.seo.title);
        this.createUpdateMeta('property', 'og:type', this.seo.type);
        // this.createUpdateMeta('property', 'og:url', this.seo.url);
        this.updateTitle(this.seo.title);
      });
    });
  }

  createUpdateMeta(attribute, attributeValue, contentValue) {
    let htmlElement: any = this.document.querySelector('meta[' + attribute + '=\'' + attributeValue + '\']');
    if (!htmlElement) {
      htmlElement = this.document.createElement('meta');
      htmlElement.setAttribute(attribute, attributeValue);
      htmlElement.setAttribute('content', contentValue);
      this.document.head.appendChild(htmlElement);
    } else {
      htmlElement.setAttribute('content', contentValue);
    }
  }

  updateTitle(title) {
    this.title.setTitle(title);
    let htmlElement: any = this.document.querySelector('meta[title]');
    if (!htmlElement) {
      htmlElement = this.document.createElement('meta');
      htmlElement.setAttribute('title', title);
    } else {
      htmlElement.setAttribute('title', title);
    }
  }
}
