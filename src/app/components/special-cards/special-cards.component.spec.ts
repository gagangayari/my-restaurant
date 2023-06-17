import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCardsComponent } from './special-cards.component';

describe('SpecialCardsComponent', () => {
  let component: SpecialCardsComponent;
  let fixture: ComponentFixture<SpecialCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialCardsComponent]
    });
    fixture = TestBed.createComponent(SpecialCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
