import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemployeeComponent } from './deletemployee.component';

describe('DeletemployeeComponent', () => {
  let component: DeletemployeeComponent;
  let fixture: ComponentFixture<DeletemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
