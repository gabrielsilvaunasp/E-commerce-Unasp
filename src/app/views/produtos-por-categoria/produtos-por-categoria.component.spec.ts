import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPorCategoriaComponent } from './produtos-por-categoria.component';

describe('ProdutosPorCategoriaComponent', () => {
  let component: ProdutosPorCategoriaComponent;
  let fixture: ComponentFixture<ProdutosPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosPorCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
