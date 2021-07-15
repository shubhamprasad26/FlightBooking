import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdminAirlinesComponent } from './manage-admin-airlines.component';

describe('ManageAdminAirlinesComponent', () => {
  let component: ManageAdminAirlinesComponent;
  let fixture: ComponentFixture<ManageAdminAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdminAirlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
