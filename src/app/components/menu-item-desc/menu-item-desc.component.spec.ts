import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemDescComponent } from './menu-item-desc.component';

describe('MenuItemDescComponent', () => {
  let component: MenuItemDescComponent;
  let fixture: ComponentFixture<MenuItemDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemDescComponent]
    });
    fixture = TestBed.createComponent(MenuItemDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
