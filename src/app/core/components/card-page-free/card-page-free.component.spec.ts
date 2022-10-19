import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageFreeComponent } from './card-page-free.component';

describe('CardPageFreeComponent', () => {
  let component: CardPageFreeComponent;
  let fixture: ComponentFixture<CardPageFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPageFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPageFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
