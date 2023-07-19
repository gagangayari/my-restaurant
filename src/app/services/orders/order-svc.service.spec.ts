import { TestBed } from '@angular/core/testing';

import { OrderSvcService } from './order-svc.service';

describe('OrderSvcService', () => {
  let service: OrderSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
