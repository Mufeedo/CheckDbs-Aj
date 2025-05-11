import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDBSComponent } from './enhanced-dbs.component';

describe('EnhancedDBSComponent', () => {
  let component: EnhancedDBSComponent;
  let fixture: ComponentFixture<EnhancedDBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedDBSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedDBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
