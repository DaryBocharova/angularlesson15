import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveFiveComponent } from './five-five.component';

describe('FiveFiveComponent', () => {
  let component: FiveFiveComponent;
  let fixture: ComponentFixture<FiveFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
