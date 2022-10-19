import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAccessCardComponent } from './module-access-card.component';

describe('ModuleAccessCardComponent', () => {
  let component: ModuleAccessCardComponent;
  let fixture: ComponentFixture<ModuleAccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleAccessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
