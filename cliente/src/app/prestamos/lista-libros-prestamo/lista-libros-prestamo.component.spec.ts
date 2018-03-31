import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLibrosPrestamoComponent } from './lista-libros-prestamo.component';

describe('ListaLibrosPrestamoComponent', () => {
  let component: ListaLibrosPrestamoComponent;
  let fixture: ComponentFixture<ListaLibrosPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLibrosPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLibrosPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
