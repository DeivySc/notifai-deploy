import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDataTableComponent } from './performance-data-table.component';

describe('PerformanceDataTableComponent', () => {
  let component: PerformanceDataTableComponent;
  let fixture: ComponentFixture<PerformanceDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
