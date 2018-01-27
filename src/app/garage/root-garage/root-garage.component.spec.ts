import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootGarageComponent } from './root-garage.component';

describe('RootGarageComponent', () => {
  let component: RootGarageComponent;
  let fixture: ComponentFixture<RootGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
