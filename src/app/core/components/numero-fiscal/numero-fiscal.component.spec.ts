import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroFiscalComponent } from './numero-fiscal.component';

describe('NumeroFiscalComponent', () => {
  let component: NumeroFiscalComponent;
  let fixture: ComponentFixture<NumeroFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroFiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
