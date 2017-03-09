import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SeoService {
  constructor(private http: Http) { }

  getSeo() {
    // return 'foo';
    return this.http.get('http://localhost:5200/api/seo');
  }
}
