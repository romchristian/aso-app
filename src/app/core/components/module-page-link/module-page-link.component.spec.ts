import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePageLinkComponent } from './module-page-link.component';

describe('ModulePageLinkComponent', () => {
  let component: ModulePageLinkComponent;
  let fixture: ComponentFixture<ModulePageLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulePageLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
