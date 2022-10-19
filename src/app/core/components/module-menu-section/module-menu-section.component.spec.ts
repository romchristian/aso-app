import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMenuSectionComponent } from './module-menu-section.component';

describe('ModuleMenuSectionComponent', () => {
  let component: ModuleMenuSectionComponent;
  let fixture: ComponentFixture<ModuleMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleMenuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
