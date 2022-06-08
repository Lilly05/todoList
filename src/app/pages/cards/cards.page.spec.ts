import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPage } from './cards.page';

describe('CardsComponent', () => {
  let component: CardsPage;
  let fixture: ComponentFixture<CardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
