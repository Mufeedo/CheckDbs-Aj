import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastSupportSectionComponent } from './fast-support-section.component';

describe('FastSupportSectionComponent', () => {
  let component: FastSupportSectionComponent;
  let fixture: ComponentFixture<FastSupportSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastSupportSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastSupportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
