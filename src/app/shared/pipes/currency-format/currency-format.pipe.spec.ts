import { TestBed } from '@angular/core/testing';
import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  let pipe: CurrencyFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CurrencyFormatPipe] });
    pipe = TestBed.inject(CurrencyFormatPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
