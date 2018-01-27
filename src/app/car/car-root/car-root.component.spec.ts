import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRootComponent } from './car-root.component';

describe('CarRootComponent', () => {
  let component: CarRootComponent;
  let fixture: ComponentFixture<CarRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
