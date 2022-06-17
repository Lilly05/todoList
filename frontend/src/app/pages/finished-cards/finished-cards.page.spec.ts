import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedCardsPage } from './finished-cards.page';

describe('FinishedCardsComponent', () => {
  let component: FinishedCardsPage;
  let fixture: ComponentFixture<FinishedCardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedCardsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
