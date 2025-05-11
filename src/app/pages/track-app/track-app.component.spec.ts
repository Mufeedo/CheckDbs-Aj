import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAppComponent } from './track-app.component';

describe('TrackAppComponent', () => {
  let component: TrackAppComponent;
  let fixture: ComponentFixture<TrackAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
