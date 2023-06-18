import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHomeComponent } from './category-home.component';

describe('CategoryHomeComponent', () => {
  let component: CategoryHomeComponent;
  let fixture: ComponentFixture<CategoryHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryHomeComponent]
    });
    fixture = TestBed.createComponent(CategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
