import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveOneComponent } from './five-one.component';

describe('FiveOneComponent', () => {
  let component: FiveOneComponent;
  let fixture: ComponentFixture<FiveOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
