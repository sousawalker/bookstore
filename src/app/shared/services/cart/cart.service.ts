import { Injectable } from '@angular/core';

import { BookModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: BookModel[] = [];

  addBook(book: BookModel) {
    this.books.push(book);
  }

  removeBook(index: number) {
    this.books.splice(index, 1);
  }

  listBooks() {
    return this.books;
  }
}
