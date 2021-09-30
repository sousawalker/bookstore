import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WhiteLabelService } from './white-label.service';

describe('WhiteLabelService', () => {
  let service: WhiteLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WhiteLabelService]
    });
    service = TestBed.inject(WhiteLabelService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
