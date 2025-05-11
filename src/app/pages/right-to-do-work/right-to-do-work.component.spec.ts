import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToDoWorkComponent } from './right-to-do-work.component';

describe('RightToDoWorkComponent', () => {
  let component: RightToDoWorkComponent;
  let fixture: ComponentFixture<RightToDoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightToDoWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightToDoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
