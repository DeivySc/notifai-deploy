import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCampaignComponent } from './process-campaign.component';

describe('ProcessCampaignComponent', () => {
  let component: ProcessCampaignComponent;
  let fixture: ComponentFixture<ProcessCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
