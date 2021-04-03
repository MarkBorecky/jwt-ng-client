import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotFoundExceptionComponent } from './error-not-found-exception.component';

describe('ErrorNotFoundExceptionComponent', () => {
  let component: ErrorNotFoundExceptionComponent;
  let fixture: ComponentFixture<ErrorNotFoundExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNotFoundExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotFoundExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
