import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BooksService } from './books.service';
import { environment } from '../../../../environments/environment';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`restApi has default value`, () => {
    expect(service.restApi).toEqual(environment.restApi);
  });
});
