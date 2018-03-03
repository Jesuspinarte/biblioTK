import { TestBed, inject } from '@angular/core/testing';

import { DbLibroService } from './db-libro.service';

describe('DbLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbLibroService]
    });
  });

  it('should be created', inject([DbLibroService], (service: DbLibroService) => {
    expect(service).toBeTruthy();
  }));
});
