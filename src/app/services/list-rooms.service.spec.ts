import { TestBed } from '@angular/core/testing';

import { ListRoomsService } from './list-rooms.service';

describe('ListRoomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRoomsService = TestBed.get(ListRoomsService);
    expect(service).toBeTruthy();
  });
});
