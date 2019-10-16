import { TestBed } from '@angular/core/testing';

import { EnvioObjetosService } from './envio-objetos.service';

describe('EnvioObjetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvioObjetosService = TestBed.get(EnvioObjetosService);
    expect(service).toBeTruthy();
  });
});
