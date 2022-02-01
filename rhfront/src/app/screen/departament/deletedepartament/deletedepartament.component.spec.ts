import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedepartamentComponent } from './deletedepartament.component';

describe('DeletedepartamentComponent', () => {
  let component: DeletedepartamentComponent;
  let fixture: ComponentFixture<DeletedepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedepartamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
