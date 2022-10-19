import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditInfoCardComponent } from './audit-info-card.component';

describe('AuditInfoCardComponent', () => {
  let component: AuditInfoCardComponent;
  let fixture: ComponentFixture<AuditInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
