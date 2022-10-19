import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputtextComponent } from './form-inputtext.component';

describe('FormInputtextComponent', () => {
  let component: FormInputtextComponent;
  let fixture: ComponentFixture<FormInputtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
