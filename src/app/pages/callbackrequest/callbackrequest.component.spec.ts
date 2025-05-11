import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackrequestComponent } from './callbackrequest.component';

describe('CallbackrequestComponent', () => {
  let component: CallbackrequestComponent;
  let fixture: ComponentFixture<CallbackrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackrequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
