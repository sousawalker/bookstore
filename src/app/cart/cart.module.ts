import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { CurrencyFormatModule } from '../shared/pipes/currency-format/currency-format.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CartRoutingModule,
    CommonModule,
    CurrencyFormatModule
  ]
})
export class CartModule { }
