import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyInfoItemComponent } from './agency-info-item.component';

describe('AgencyInfoItemComponent', () => {
  let component: AgencyInfoItemComponent;
  let fixture: ComponentFixture<AgencyInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
