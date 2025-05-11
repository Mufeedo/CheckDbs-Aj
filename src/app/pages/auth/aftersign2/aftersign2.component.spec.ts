import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftersign2Component } from './aftersign2.component';

describe('Aftersign2Component', () => {
  let component: Aftersign2Component;
  let fixture: ComponentFixture<Aftersign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftersign2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aftersign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
