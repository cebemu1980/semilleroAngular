import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartamentComponent } from './edit-departament.component';

describe('EditDepartamentComponent', () => {
  let component: EditDepartamentComponent;
  let fixture: ComponentFixture<EditDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepartamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
