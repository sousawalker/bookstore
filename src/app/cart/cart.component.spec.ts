import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from '../shared';
import { HeaderService } from '../shared';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    const cartServiceStub = () => ({
      listBooks: () => ({})
    });
    const headerServiceStub = () => ({
      configObservable: { subscribe: (f: any) => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CartComponent],
      providers: [
        { provide: CartService, useFactory: cartServiceStub },
        { provide: HeaderService, useFactory: headerServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });
});
