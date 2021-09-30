import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BookModel } from '../shared';
import { BooksService } from '../shared';
import { CartService } from '../shared';
import { HeaderService } from '../shared';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(() => {
    const loadingBarServiceStub = () => ({ useRef: () => ({}) });
    const booksServiceStub = () => ({
      latestBooks: () => ({ toPromise: () => ({ books: {} }) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BooksComponent],
      providers: [
        { provide: LoadingBarService, useFactory: loadingBarServiceStub },
        { provide: BooksService, useFactory: booksServiceStub }
      ]
    });
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`cartCount has default value`, () => {
    expect(component.cartCount).toEqual(0);
  });

  describe('addToCart', () => {
    it('makes expected calls', () => {
      const bookModelStub: BookModel = <any>{};
      const cartServiceStub: CartService = fixture.debugElement.injector.get(
        CartService
      );
      const headerServiceStub: HeaderService = fixture.debugElement.injector.get(
        HeaderService
      );
      spyOn(cartServiceStub, 'addBook').and.callThrough();
      spyOn(headerServiceStub, 'configChangeValue').and.callThrough();
      component.addToCart(bookModelStub);
      expect(cartServiceStub.addBook).toHaveBeenCalled();
      expect(headerServiceStub.configChangeValue).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const loadingBarServiceStub: LoadingBarService = fixture.debugElement.injector.get(
        LoadingBarService
      );
      spyOn(loadingBarServiceStub, 'useRef').and.callThrough();
      component.ngOnInit();
      expect(loadingBarServiceStub.useRef).toHaveBeenCalled();
    });
  });
});
