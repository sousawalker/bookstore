import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book.component';

import { CurrencyFormatModule } from '../../pipes/currency-format/currency-format.module';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    CurrencyFormatModule
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }
