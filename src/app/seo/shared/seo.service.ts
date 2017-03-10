import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title, DOCUMENT } from '@angular/platform-browser';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SeoService {
  private seoSource = new Subject<any>();
  seo = this.seoSource.asObservable();
  constructor(http: Http, router: Router, private title: Title, @Inject(DOCUMENT) private document: any) {
    router.events.subscribe(() => {
      http.get('/api/seo').subscribe(seo => {
        const newSeo = seo.json();
        this.seoSource.next(newSeo);
        this.createUpdateMeta('name', 'author', newSeo.author);
        this.createUpdateMeta('name', 'description', newSeo.description);
        this.createUpdateMeta('name', 'google-site-verification', newSeo.googleSiteVerification);
        this.createUpdateMeta('name', 'keywords', newSeo.keywords);
        this.createUpdateMeta('name', 'msvalidate.01', newSeo.msValidate);
        this.createUpdateMeta('name', 'twitter:description', newSeo.description);
        this.createUpdateMeta('name', 'twitter:image', newSeo.image);
        this.createUpdateMeta('name', 'twitter:title', newSeo.title);
        this.createUpdateMeta('name', 'twitter:url', newSeo.url);
        this.createUpdateMeta('property', 'fb:app_id', newSeo.fbAppId);
        this.createUpdateMeta('property', 'og:description', newSeo.description);
        this.createUpdateMeta('property', 'og:image', newSeo.image);
        this.createUpdateMeta('property', 'og:site_name', newSeo.siteName);
        this.createUpdateMeta('property', 'og:title', newSeo.title);
        this.createUpdateMeta('property', 'og:type', newSeo.type);
        this.createUpdateMeta('property', 'og:url', newSeo.url);
        this.updateTitle(newSeo.title);
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
