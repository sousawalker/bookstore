import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { BooksComponent } from './books.component';

import { BookModule } from '../shared/components/book/book.module';

import { CurrencyFormatModule } from '../shared/pipes/currency-format/currency-format.module';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    BookModule,
    BooksRoutingModule,
    CommonModule,
    CurrencyFormatModule
  ]
})
export class BooksModule { }
