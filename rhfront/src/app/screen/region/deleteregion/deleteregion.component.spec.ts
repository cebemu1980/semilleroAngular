import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteregionComponent } from './deleteregion.component';

describe('DeleteregionComponent', () => {
  let component: DeleteregionComponent;
  let fixture: ComponentFixture<DeleteregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
