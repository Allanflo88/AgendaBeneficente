import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCriarEntidadeComponent } from './solicitar-criar-entidade.component';

describe('SolicitarCriarEntidadeComponent', () => {
  let component: SolicitarCriarEntidadeComponent;
  let fixture: ComponentFixture<SolicitarCriarEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarCriarEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarCriarEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
