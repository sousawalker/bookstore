import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  restApi = environment.restApi;

  constructor( private http: HttpClient ) { }

  latestBooks() {
    return this.http.get(`${this.restApi}/search/front`);
  }

  detailsBook(isbn13: number) {
    return this.http.get(`${this.restApi}/books/${isbn13}`);
  }
}
