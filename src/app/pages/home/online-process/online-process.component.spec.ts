import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineProcessComponent } from './online-process.component';

describe('OnlineProcessComponent', () => {
  let component: OnlineProcessComponent;
  let fixture: ComponentFixture<OnlineProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
