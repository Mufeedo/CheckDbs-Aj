import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftersign1Component } from './aftersign1.component';

describe('Aftersign1Component', () => {
  let component: Aftersign1Component;
  let fixture: ComponentFixture<Aftersign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftersign1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aftersign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
