import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedCardsComponent } from './finished-cards.component';

describe('FinishedCardsComponent', () => {
  let component: FinishedCardsComponent;
  let fixture: ComponentFixture<FinishedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
