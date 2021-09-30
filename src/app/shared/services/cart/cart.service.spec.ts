import { TestBed } from '@angular/core/testing';
import { BookModel } from '../../models';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CartService] });
    service = TestBed.inject(CartService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`books has default value`, () => {
    expect(service.books).toEqual([]);
  });
});
