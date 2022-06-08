import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardPage } from './create-card.page';

describe('CreateCardComponent', () => {
  let component: CreateCardPage;
  let fixture: ComponentFixture<CreateCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
