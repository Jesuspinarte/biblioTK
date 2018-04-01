import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestamoComponent } from './form-prestamo.component';

describe('FormPrestamoComponent', () => {
  let component: FormPrestamoComponent;
  let fixture: ComponentFixture<FormPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
