import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

import { getLocaleCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  transform(value: string, decimals: number): any {
    let price = value.replace('$', '');

    return getLocaleCurrencySymbol(this.locale) + " " + new Intl.NumberFormat(this.locale, { style: 'decimal', minimumFractionDigits: decimals }).format(Number(price));
  }

}
