import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCardsComponent } from './old-cards.component';

describe('OldCardsComponent', () => {
  let component: OldCardsComponent;
  let fixture: ComponentFixture<OldCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
