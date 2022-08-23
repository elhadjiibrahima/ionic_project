import { TestBed } from '@angular/core/testing';

import { DetailBurgerService } from './detail-burger.service';

describe('DetailBurgerService', () => {
  let service: DetailBurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailBurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
