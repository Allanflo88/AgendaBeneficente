import { TestBed, inject } from '@angular/core/testing';

import { SolicitacoesService } from './solicitacoes.service';

describe('SolicitacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitacoesService]
    });
  });

  it('should be created', inject([SolicitacoesService], (service: SolicitacoesService) => {
    expect(service).toBeTruthy();
  }));
});
