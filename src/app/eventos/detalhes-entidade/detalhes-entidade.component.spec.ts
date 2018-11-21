import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEntidadeComponent } from './detalhes-entidade.component';

describe('DetalhesEntidadeComponent', () => {
  let component: DetalhesEntidadeComponent;
  let fixture: ComponentFixture<DetalhesEntidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesEntidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
