import { TestBed } from '@angular/core/testing';

import { ListSortService } from './list-sort.service';

describe('ListSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListSortService = TestBed.get(ListSortService);
    expect(service).toBeTruthy();
  });
});
