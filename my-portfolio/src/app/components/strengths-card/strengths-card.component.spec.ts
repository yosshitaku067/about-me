import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthsCardComponent } from './strengths-card.component';

describe('StrengthsCardComponent', () => {
  let component: StrengthsCardComponent;
  let fixture: ComponentFixture<StrengthsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
