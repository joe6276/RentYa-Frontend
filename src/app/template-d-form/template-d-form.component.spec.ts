import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDFormComponent } from './template-d-form.component';

describe('TemplateDFormComponent', () => {
  let component: TemplateDFormComponent;
  let fixture: ComponentFixture<TemplateDFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateDFormComponent]
    });
    fixture = TestBed.createComponent(TemplateDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
