import { TestBed } from '@angular/core/testing';

import { ListOfNumbersService } from './list-of-numbers.service';

describe('ListOfNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfNumbersService = TestBed.get(ListOfNumbersService);
    expect(service).toBeTruthy();
  });
});
