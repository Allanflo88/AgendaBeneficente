import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDeletarEntidadeComponent } from './solicitar-deletar-entidade.component';

describe('SolicitarDeletarEntidadeComponent', () => {
  let component: SolicitarDeletarEntidadeComponent;
  let fixture: ComponentFixture<SolicitarDeletarEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarDeletarEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDeletarEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
