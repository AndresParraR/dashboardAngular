import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCapacityComponent } from './card-capacity.component';

describe('CardCapacityComponent', () => {
  let component: CardCapacityComponent;
  let fixture: ComponentFixture<CardCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
