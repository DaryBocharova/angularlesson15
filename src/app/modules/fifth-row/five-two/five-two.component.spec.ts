import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTwoComponent } from './five-two.component';

describe('FiveTwoComponent', () => {
  let component: FiveTwoComponent;
  let fixture: ComponentFixture<FiveTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
