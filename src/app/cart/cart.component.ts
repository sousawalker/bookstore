import { Component, OnInit } from '@angular/core';

import { BookModel, CartService, HeaderService } from '../shared';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  books: BookModel[] = [];

  total: string = "";

  cartCount: number = 0;

  constructor(
    private cartService: CartService,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.configObservable.subscribe((value: number) => {
      this.cartCount = value;
    });

    this.books = this.cartService.listBooks();

    this.calcTotal();
  }

  calcTotal() {
    this.total = "";

    this.books.map((book: BookModel) => {
      let value = book.price.replace('$', '');

      this.total = `${(Number(this.total) + Number(value))}`;
    });
  }

  removeItem(index: number) {
    this.cartService.removeBook(index);

    this.cartCount = this.cartCount - 1;

    this.headerService.configChangeValue(this.cartCount);

    this.calcTotal();
  }

}
