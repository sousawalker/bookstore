import { Component, OnInit } from '@angular/core';

import { LoadingBarService } from '@ngx-loading-bar/core';

import {
  BookModel,
  BooksService,
  CartService,
  HeaderService
} from '../shared';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books!: BookModel[];

  cartCount: number = 0;

  loadingBar: any;

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private headerService: HeaderService,
    private loadingBarService: LoadingBarService
  ) { }

  ngOnInit(): void {
    this.loadingBar = this.loadingBarService.useRef();

    this.listBooks();
  }

  async listBooks() {
    this.loadingBar.stop();

    this.loadingBar.start();

    let response: any = await this.booksService.latestBooks().toPromise();

    this.books = response.books;

    this.loadingBar.complete();
  }

  addToCart(book: BookModel) {
    this.cartCount = this.cartCount + 1;

    this.headerService.configChangeValue(this.cartCount);

    this.cartService.addBook(book);
  }

}
