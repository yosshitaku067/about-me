import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyboxComponent } from './toybox.component';

describe('ToyboxComponent', () => {
  let component: ToyboxComponent;
  let fixture: ComponentFixture<ToyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
