import { TestBed } from '@angular/core/testing';

import { LoginPagesService } from './login-pages.service';

describe('LoginPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPagesService = TestBed.get(LoginPagesService);
    expect(service).toBeTruthy();
  });
});
