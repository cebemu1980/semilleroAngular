import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelocationComponent } from './deletelocation.component';

describe('DeletelocationComponent', () => {
  let component: DeletelocationComponent;
  let fixture: ComponentFixture<DeletelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
