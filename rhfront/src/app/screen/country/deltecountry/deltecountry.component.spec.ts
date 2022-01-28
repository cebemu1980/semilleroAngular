import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltecountryComponent } from './deltecountry.component';

describe('DeltecountryComponent', () => {
  let component: DeltecountryComponent;
  let fixture: ComponentFixture<DeltecountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltecountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltecountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
